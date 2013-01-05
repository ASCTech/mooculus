module ProfileHelper
  def genders
    options_for_select([["", ""], %w(Female Female), %w(Male Male)], @user.gender)
  end

  def months
    options_for_select({ "Jan" => 1, "Feb" => 2, "Mar" => 3, "Apr" => 4,
                       "May" => 5, "Jun" => 6, "Jul" => 7, "Aug" => 8,
                       "Sep" => 9, "Oct" => 10, "Nov" => 11, "Dec" => 12 },
                      @user.birthday.month)
  end

  def days
    options_for_select((1..31).map { |i| [i, i] }, @user.birthday.day)
  end

  
  def years
    options_for_select((1900..2010).map { |i| [i, i] }.reverse, 
                       @user.birthday.year)
  end
end
