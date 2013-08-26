# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130723163538) do

  create_table "authentications", :force => true do |t|
    t.integer  "user_id"
    t.string   "provider"
    t.string   "uid"
    t.string   "token"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "badges_sashes", :force => true do |t|
    t.integer  "badge_id"
    t.integer  "sash_id"
    t.boolean  "notified_user", :default => false
    t.datetime "created_at"
  end

  add_index "badges_sashes", ["badge_id", "sash_id"], :name => "index_badges_sashes_on_badge_id_and_sash_id"
  add_index "badges_sashes", ["badge_id"], :name => "index_badges_sashes_on_badge_id"
  add_index "badges_sashes", ["sash_id"], :name => "index_badges_sashes_on_sash_id"

  create_table "competencies", :force => true do |t|
    t.float    "estimate"
    t.float    "uncertainty"
    t.integer  "user_id"
    t.integer  "exercise_id"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.float    "max_estimate"
    t.float    "min_estimate"
  end

  add_index "competencies", ["user_id", "exercise_id"], :name => "index_competencies_on_user_id_and_exercise_id"

  create_table "developers", :force => true do |t|
    t.string   "name"
    t.string   "photo"
    t.string   "description"
    t.string   "link"
    t.string   "email"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "exercises", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "page"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
    t.integer  "position"
    t.integer  "week"
    t.float    "prior_knowing"
    t.float    "prior_unknowing"
    t.float    "knowing_knowing"
    t.float    "knowing_unknowing"
    t.float    "unknowing_knowing"
    t.float    "unknowing_unknowing"
    t.float    "knowing_ace"
    t.float    "knowing_correct"
    t.float    "knowing_incorrect"
    t.float    "knowing_hint"
    t.float    "unknowing_ace"
    t.float    "unknowing_correct"
    t.float    "unknowing_incorrect"
    t.float    "unknowing_hint"
  end

  create_table "handouts", :force => true do |t|
    t.string   "title"
    t.string   "url"
    t.integer  "order"
    t.integer  "week"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "merit_actions", :force => true do |t|
    t.integer  "user_id"
    t.string   "action_method"
    t.integer  "action_value"
    t.boolean  "had_errors",    :default => false
    t.string   "target_model"
    t.integer  "target_id"
    t.boolean  "processed",     :default => false
    t.string   "log"
    t.datetime "created_at",                       :null => false
    t.datetime "updated_at",                       :null => false
  end

  add_index "merit_actions", ["processed"], :name => "index_merit_actions_on_processed"

  create_table "merit_score_points", :force => true do |t|
    t.integer  "score_id"
    t.integer  "num_points", :default => 0
    t.string   "log"
    t.datetime "created_at"
  end

  create_table "merit_scores", :force => true do |t|
    t.integer "sash_id"
    t.string  "category", :default => "default"
  end

  create_table "problems", :force => true do |t|
    t.string   "name"
    t.integer  "exercise_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.integer  "weight"
  end

  add_index "problems", ["exercise_id"], :name => "index_problems_on_exercise_id"

  create_table "sashes", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "scores", :force => true do |t|
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.integer  "user_id"
    t.integer  "time_taken"
    t.integer  "attempt_number"
    t.boolean  "complete"
    t.integer  "count_hints"
    t.string   "attempt_content"
    t.integer  "seed"
    t.integer  "problem_id"
    t.integer  "exercise_id"
  end

  add_index "scores", ["user_id", "complete", "count_hints"], :name => "index_scores_on_user_id_and_complete_and_count_hints"
  add_index "scores", ["user_id", "complete"], :name => "index_scores_on_user_id_and_complete"

  create_table "users", :force => true do |t|
    t.string   "name"
    t.datetime "created_at",                                :null => false
    t.datetime "updated_at",                                :null => false
    t.string   "email",                  :default => "",    :null => false
    t.string   "encrypted_password",     :default => "",    :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "coursera_id"
    t.integer  "sash_id"
    t.integer  "level",                  :default => 0
    t.string   "osu_name_dot_number"
    t.string   "most_recent_ip"
    t.string   "gender"
    t.date     "birthday"
    t.string   "location"
    t.boolean  "consent",                :default => false
    t.datetime "consented_at"
  end

  add_index "users", ["coursera_id"], :name => "index_users_on_coursera_id", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email"
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  create_table "videos", :force => true do |t|
    t.string   "title"
    t.string   "url"
    t.integer  "order"
    t.integer  "week"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
