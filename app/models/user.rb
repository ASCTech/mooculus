class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  attr_accessible :name

  has_many :authentications, :dependent => :delete_all
  has_many :scores, :dependent => :destroy

  def apply_omniauth(auth)
    puts auth
    self.email = auth['info']['email']
    self.name = auth['info']['name']
    # should use this line probably in the future
    #self.email = auth['extra']['raw_info']['email']

    # Again, saving token is optional. If you haven't created the column in authentications table, this will fail
    authentications.build(:provider => auth['provider'], :uid => auth['uid'], :token => auth['credentials']['token'])
  end

  def self.find_for_coursera(access_token, signed_in_resource=nil)
    # FIXME this needs to grab the realname from the raw_info in omniauth-coursera
    data = access_token.info
    user = User.where(:email => data["email"]).first

    unless user
      user = User.create(:name => data["name"],
                         :email => data["email"],
                         :password => Devise.friendly_token[0,20]
                        )
    end
    user
  end
end
