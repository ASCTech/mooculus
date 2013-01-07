require 'nokogiri'

namespace :exercise do
  EXERCISES_PATH = "/public/khan-exercises/exercises"

  desc "Generate exercises from #{EXERCISES_PATH}"
  task :generate => :environment do

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
      STDERR.puts("ERROR: Please fix problem div tags and run task again")
      exit 1
    end

    puts "Exercises generated successfully"
  end

  desc "Generate exercise ordering from #{EXERCISES_PATH}/completeOrder.txt"
  task :order => :environment do
    unordered_exercises = []
    file_lines = []

    File.open("#{Rails.root}#{EXERCISES_PATH}/completeOrder.txt") do |file|
      file_lines = file.readlines.map { |l| l.strip! }
    end

    Exercise.all.each do |exercise|
      unless file_lines.include?(exercise.page)
        unordered_exercises << exercise.page
        next
      end

      exercise.position = file_lines.index(exercise.page)
      exercise.save
    end

    unless unordered_exercises.empty?
      unordered_exercises.each do |page|
        STDERR.puts("ERROR: Exercise #{EXERCISES_PATH}/#{page} does not have an order")
      end
      STDERR.puts("ERROR: Not all exercises were given orders")
      STDERR.puts("ERROR: Please add exercise(s) to completeOrder.txt and run task again")
      exit 1
    end

    puts "Exercises ordered successfully"
  end

  desc "Generate weekly assignments from #{EXERCISES_PATH}/weeks.txt"
  task :weeks => :environment do
    unordered_exercises = []
    file_lines = []

    File.open("#{Rails.root}#{EXERCISES_PATH}/weeks.txt") do |file|
      file_lines = file.readlines.map { |l| l.strip! }
    end

    week = 0
    for line in file_lines
      if line.match( /\* Week ([0-9]+)/ )
        week = $1.to_i
        next
      end

      exercise = Exercise.where( :page => line + '.html' ).limit(1).first
      if exercise.nil?
        STDERR.puts("ERROR: '#{line}' does not match an exercise")
      else
        exercise.week = week
        exercise.save
      end
    end

    puts "Exercises assigned to weeks successfully"
  end

  desc "Generate exercises and order them"
  task :all => [:generate, :order, :weeks]
end
