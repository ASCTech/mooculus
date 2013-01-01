require 'nokogiri'

namespace :gen do
  EXERCISES_PATH = "/curriculum/khanExercise/exercises"

  desc "Generates exercises from location #{EXERCISES_PATH}"
  task :exercises => :environment do

    Dir.glob("#{Rails.root}#{EXERCISES_PATH}/*.html") do |file_name|
      page = File.basename(file_name)

      exercise = Exercise.find_or_create_by_page(page)

      File.open(file_name) do |file|
        doc = Nokogiri::HTML(file)
        title = doc.css("title").text.titleize

        exercise.title = title
        exercise.page = page
        exercise.save

        doc.css(".problems > div").each do |div|
          id = div['id']
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
  end
end
