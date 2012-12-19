FactoryGirl.define do
  factory :user do
    name "Ryan"
    email "sample@example.com"
    password "password"
  end

  factory :exercise do
    sequence(:title) {|n| "Sample #{n}"}
    sequence(:description) {|n| "This is a description of Sample #{n}."}
    sequence(:page) {|n| "sample_#{n}.html"}
    sequence(:problem_number)
  end

  factory :score do
    sequence(:time_taken) {|n| 10+n}
    sequence(:attempt_number) {|n| 10+n}
    sequence(:complete) {|n| 10+n}
    sequence(:count_hints) {|n| 10+n}
    sequence(:attempt_content) {|n| 10+n}
    sequence(:seed) {|n| 10+n}
  end

end

