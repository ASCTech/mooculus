class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

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
end
