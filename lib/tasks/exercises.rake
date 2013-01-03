require 'nokogiri'

namespace :gen do
  EXERCISES_PATH = "/public/khan-exercises/exercises"

  desc "Generates exercises from location #{EXERCISES_PATH}"
  task :exercises => :environment do

    missing_problem_exercises = []

    Dir.glob("#{Rails.root}#{EXERCISES_PATH}/*.html") do |file_name|
      page = File.basename(file_name)
      next if page == "khan-exercise.html" || page == "khan-site.html"

      exercise = Exercise.find_or_create_by_page(page)

      File.open(file_name) do |file|
        doc = Nokogiri::HTML(file)
        title = doc.css("title").text.titleize

        exercise.title = title
        exercise.page = page
        exercise.save

        doc.css(".problems > div").each do |div|
          id = div['id']
          if id.nil?
            missing_problem_exercises << page
            next
          end

          weight = div['data-weight'] || 1

          if exercise.problems.where(name: id).empty?
            problem = exercise.problems.build(name: id, weight: weight)
            problem.save
          end
        end

        all_problems = exercise.problems.map { |p| p.name }
        present_problems = doc.css(".problems > div").map { |d| d['id'] }

        old_problems = all_problems - present_problems

        old_problems.each do |name|
          old_problem = exercise.problems.find_by_name(name)
          old_problem.weight = 0
          old_problem.save
        end
      end
    end

    unless missing_problem_exercises.empty?
      missing_problem_exercises.uniq.each do |page|
        STDERR.puts("ERROR: A problem in #{EXERCISES_PATH}/#{page} does not have a div id")
      end
      STDERR.puts("ERROR: Not all exercises and problems were created")
      exit 1
    end

  end
end
