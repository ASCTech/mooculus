namespace :gen do
  ORDER_PATH = "/curriculum/khanExercise/exercises/orderOfExercises.txt"
  EXERCISES_PATH = "/curriculum/khanExercise/exercises/"

  desc "Generates exercises from location #{EXERCISES_PATH}"
  task :exercises => :environment do
    exercise_names = []
    puts File.dirname(__FILE__)

    File.open(File.dirname(__FILE__) + "/../.." + ORDER_PATH) do |file|
      file.each do |line|
        if line.start_with?("C ")
          title = line.partition(" ").last.strip
          exercise_names << title
        end
      end
    end

    Dir.glob("#{File.dirname(__FILE__)}/../..#{EXERCISES_PATH}*.html") do |file_name|
      page = File.basename(file_name)
      basename = File.basename(file_name, ".html")
      inclusion = exercise_names.include?(basename)
      if inclusion
        @exercise = Exercise.find_or_create_by_page(page)
        File.open(file_name) do |file|
          doc = Nokogiri::HTML(file)
          title = doc.css("title").text.titleize
          @exercise = Exercise.new
          @exercise.title = title
          @exercise.page = page
          @exercise.problem_number = exercises_path.index(basename)
          doc.css(".problems > div").each do |div|
            weight = div['data-weight'] || 0
            unless @exercise.problems.find_by_name(div['id'])
              @problem = @exercise.problems.build(:name => div['id'], 
                                                  :weight => weight)
            end

          end

        end
        puts "exercise with title #{@exercise.title} updated"
      end
    end

  end
end
