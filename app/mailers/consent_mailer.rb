class ConsentMailer < ActionMailer::Base
  default from: "Jim Fowler <fowler@math.osu.edu>"

  def informed_consent(user)
    @user = user
    encrypted_user_id = Tokenifier.encrypt(user.id)
    @url  = "https://mooculus.osu.edu/profile/#{encrypted_user_id}"
    mail(:to => user.osu_name_dot_number + "@osu.edu", :subject => "Informed Consent for MOOCulus")
  end
end
