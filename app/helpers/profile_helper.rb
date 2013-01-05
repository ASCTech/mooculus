module ProfileHelper
  def genders
    default = @user.gender || ""
    options_for_select([["", ""], %w(Female Female), %w(Male Male)], default)
  end

  def months
    default = @user.birthday? ? @user.birthday.month : 1
    options_for_select({ "Jan" => 1, "Feb" => 2, "Mar" => 3, "Apr" => 4,
                       "May" => 5, "Jun" => 6, "Jul" => 7, "Aug" => 8,
                       "Sep" => 9, "Oct" => 10, "Nov" => 11, "Dec" => 12 },
                      default)
  end

  def days
    default = @user.birthday? ? @user.birthday.day : 1
    options_for_select((1..31).map { |i| [i, i] }, default)
  end

  
  def years
    default = @user.birthday? ? @user.birthday.year : 2010 
    options_for_select((1900..2010).map { |i| [i, i] }.reverse, default)
  end
end
