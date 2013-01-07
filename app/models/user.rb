class User < ActiveRecord::Base
  has_merit

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable
  devise :authentication_keys => [:coursera_id]

  # Coursera doesn't provide us with an email address
  def email_required?
    false
  end

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :coursera_id, :password_confirmation, :remember_me
  attr_accessible :name

  has_many :authentications, :dependent => :delete_all
  has_many :scores, :dependent => :destroy
  has_many :competencies, :dependent => :destroy

  def apply_omniauth(auth)
    puts "Apply omniauth!"
    self.email ||= auth['info']['email']
    self.name ||= auth['info']['name']

    # Again, saving token is optional. If you haven't created the column in authentications table, this will fail
    authentications.build(:provider => auth['provider'], :uid => auth['uid'], :token => auth['credentials']['token'])
  end

  def self.find_for_coursera(access_token, signed_in_resource=nil)
    data = access_token.info
    user = User.where(:coursera_id => data["id"]).first

    unless user
      user = User.create!(:coursera_id => data["id"],
                          :name => data["name"],
                          :password => Devise.friendly_token[0,20]
                          )
    end
    user
  end

  #################################################################
  # some methods for computing simple statistics for badges
  def total_hints_requested
    self.scores.where( :attempt_content => "hint" ).count
  end

  def total_correct_answers
    self.scores.where( :complete => true ).count
  end

  def total_correct_answers_without_hints
    self.scores.where( :complete => true, :count_hints => 0 ).count
  end

  def total_thinking_time
    self.scores.sum(:time_taken)
  end

end
