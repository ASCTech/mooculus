class Developer < ActiveRecord::Base
  attr_accessible :description, :email, :link, :name, :photo
end
