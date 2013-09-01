# -*- coding: utf-8 -*-
class Youtube
  extend Ambry::Model
  field :title, :url, :week, :lecture

  filters do
    def chronological
      sort_by { |c| (100 * c.week) + c.lecture }
    end

    def in_week(week)
      find {|c| c.week == week}
    end
  end
end

Youtube.create :title => "Who will help me?", :url => "http://www.youtube.com/watch?v=R4xtSdvkG-s", :week => 1, :lecture => 0
Youtube.create :title => "Cat-years vs. human-years", :url => "http://youtu.be/ED-oYu4e3LU", :week => 1, :lecture => 0.5
Youtube.create :title => "What is a function?", :url => "http://www.youtube.com/watch?v=2MrH499MvHw", :week => 1, :lecture => 1
Youtube.create :title => "The greatest integer function", :url => "http://youtu.be/k698XGE6EUA", :week => 1, :lecture => 1.5
Youtube.create :title => "Linear functions", :url => "http://youtu.be/hYrPYeI32Gw", :week => 1, :lecture => 1.7
Youtube.create :title => "Inverses of functions", :url => "http://www.youtube.com/watch?v=daKVqDF8hng", :week => 1, :lecture => 1.8
Youtube.create :title => "When are two functions the same?", :url => "https://www.youtube.com/watch?v=GVlMFJ5TTmg", :week => 1, :lecture => 2
Youtube.create :title => "How can more functions be made?", :url => "https://www.youtube.com/watch?v=nEqCaj3hBKU", :week => 1, :lecture => 3
Youtube.create :title => "What are some real-world examples of functions?", :url => "https://www.youtube.com/watch?v=qfWM5vyXW7M", :week => 1, :lecture => 4
Youtube.create :title => "What is the domain of square root?", :url => "https://www.youtube.com/watch?v=DQ-76j0sHy0", :week => 1, :lecture => 5
Youtube.create :title => "A motivating example for limits", :url => "http://youtu.be/0WVpVxdX9YQ", :week => 1, :lecture => 6
Youtube.create :title => "What is the limit of \\(\\frac{x^2 - 1}{x-1}\\)?", :url => "https://www.youtube.com/watch?v=YTKoob7m3DM", :week => 1, :lecture => 6.5
Youtube.create :title => "Four examples of limits", :url => "http://youtu.be/MTl8wh_iyWg", :week => 1, :lecture => 6.7
Youtube.create :title => "What is the limit of \\((\\sin x)/x\\)?", :url => "https://www.youtube.com/watch?v=otW6HcxrRlY", :week => 1, :lecture => 7
Youtube.create :title => "What is the limit of \\(\\sin (1/x)\\)?", :url => "https://www.youtube.com/watch?v=oSwyUcJhrsE", :week => 1, :lecture => 8
Youtube.create :title => "Morally, what is the limit of a sum?", :url => "https://www.youtube.com/watch?v=uHEFFyVmDSc", :week => 1, :lecture => 9
Youtube.create :title => "What is the limit of a product?", :url => "https://www.youtube.com/watch?v=FvKdHYRJhuY", :week => 1, :lecture => 10
Youtube.create :title => "What is the limit of a quotient?", :url => "https://www.youtube.com/watch?v=QOfMqMDFeuA", :week => 1, :lecture => 11
Youtube.create :title => "How fast does a ball move?", :url => "https://www.youtube.com/watch?v=HwzVyIaiKcQ", :week => 1, :lecture => 12
Youtube.create :title => "Where are we in the course?", :url => "https://www.youtube.com/watch?v=aVTzlhkshTk", :week => 2, :lecture => 0
Youtube.create :title => "What is a one-sided limit?", :url => "https://www.youtube.com/watch?v=KI5tjq2yrcI", :week => 2, :lecture => 1
Youtube.create :title => "Wild Functions", :url => "http://www.youtube.com/watch?v=cTJx5P11tAY&feature=share&list=PLsvV2phQMzuXQRKrz-U9Wj9abu3PrQAXR", :week => 2, :lecture => 1.5
Youtube.create :title => "Could a One-Sided Limit Not Exist?", :url => "http://www.youtube.com/watch?v=QT2Mqbn62sw&feature=share&list=PLsvV2phQMzuXQRKrz-U9Wj9abu3PrQAXR", :week => 2, :lecture => 1.7
Youtube.create :title => "What does \"continuous\" mean?", :url => "https://www.youtube.com/watch?v=ReDZpc5jhCw", :week => 2, :lecture => 2
Youtube.create :title => "What is the intermediate value theorem?", :url => "https://www.youtube.com/watch?v=ufFla_aAHFU", :week => 2, :lecture => 3
Youtube.create :title => "Mirko and Roxy Like Food", :url => "http://www.youtube.com/watch?v=_qGIKgeWFzU&feature=share&list=PLsvV2phQMzuXQRKrz-U9Wj9abu3PrQAXR", :week => 2, :lecture => 3.5
Youtube.create :title => "How can I approximate root two?", :url => "https://www.youtube.com/watch?v=rdva97EI9GU", :week => 2, :lecture => 4
Youtube.create :title => "Why is there an \\(x\\) so that \\(f(x) = x\\)?", :url => "https://www.youtube.com/watch?v=jeOR1S92ZWo", :week => 2, :lecture => 5
Youtube.create :title => "What does \\(\lim f(x) = \infty\\) mean?", :url => "https://www.youtube.com/watch?v=XtWc-grgKeQ", :week => 2, :lecture => 6
Youtube.create :title => "Four More Example of Limits", :url => "http://www.youtube.com/watch?v=u_vCvk5T2JU&feature=share&list=PLsvV2phQMzuXQRKrz-U9Wj9abu3PrQAXR", :week => 2, :lecture => 6.5
Youtube.create :title => "What is the limit \\(f(x)\\) as \\(x\\) approaches infinity?", :url => "https://www.youtube.com/watch?v=O-7yCtlJzco", :week => 2, :lecture => 7
Youtube.create :title => "Four Examples of Limits at Infinity", :url => "http://www.youtube.com/watch?v=9EUYKTT5ZH4&feature=share&list=PLsvV2phQMzuXQRKrz-U9Wj9abu3PrQAXR", :week => 2, :lecture => 7.5
Youtube.create :title => "What are Asymptotes?", :url => "http://www.youtube.com/watch?v=TbEz5Apu3Ns&feature=share&list=PLsvV2phQMzuXQRKrz-U9Wj9abu3PrQAXR", :week => 2, :lecture => 7.7
Youtube.create :title => "Why is infinity not a number?", :url => "https://www.youtube.com/watch?v=P4uPiXBP_rc", :week => 2, :lecture => 8
Youtube.create :title => "What is the difference between potential and actual infinity?", :url => "https://www.youtube.com/watch?v=rNBoGy19lHc", :week => 2, :lecture => 9
Youtube.create :title => "What is the slope of a staircase?", :url => "https://www.youtube.com/watch?v=R5wKjst_sMM", :week => 2, :lecture => 10
Youtube.create :title => "How fast does water drip from a faucet?", :url => "https://www.youtube.com/watch?v=-9Qe9JOnqmA", :week => 2, :lecture => 11
Youtube.create :title => "What is the official definition of limit?", :url => "https://www.youtube.com/watch?v=brGYgjNjajs", :week => 2, :lecture => 12
Youtube.create :title => "Why is the limit of \\(x^2\\) as \\(x\\) approaches \\(2\\) equal to \\(4\\)?", :url => "https://www.youtube.com/watch?v=-cK46mR_Dmg", :week => 2, :lecture => 13
Youtube.create :title => "Why is the limit of \\(2x\\) as \\(x\\) approaches \\(10\\) equal to \\(20\\)?", :url => "https://www.youtube.com/watch?v=-9HyfES1VB0", :week => 2, :lecture => 14
Youtube.create :title => "What comes next? Derivatives?", :url => "https://www.youtube.com/watch?v=4skfx0S2y6Y", :week => 3, :lecture => 0
Youtube.create :title => "What is the definition of derivative?", :url => "https://www.youtube.com/watch?v=-cGbSEdqMt8", :week => 3, :lecture => 1
Youtube.create :title => "What is a tangent line?", :url => "https://www.youtube.com/watch?v=-P54Jsy8fms", :week => 3, :lecture => 2
Youtube.create :title => "Why is the absolute value function not differentiable?", :url => "https://www.youtube.com/watch?v=VpEZKqhwbF8", :week => 3, :lecture => 3
Youtube.create :title => "How does wiggling \\(x\\) affect \\(f(x)\\)?", :url => "https://www.youtube.com/watch?v=IAW2y3LuHc8", :week => 3, :lecture => 4
Youtube.create :title => "Why is \\(\\sqrt{9999}\\) so close to \\(99.995\\)?", :url => "https://www.youtube.com/watch?v=s2DZ1ZIYyBE", :week => 3, :lecture => 5
Youtube.create :title => "What information is recorded in the sign of the derivative?", :url => "https://www.youtube.com/watch?v=Kr3mZgcBwOs", :week => 3, :lecture => 6
Youtube.create :title => "Why is a differentiable function necessarily continuous?", :url => "https://www.youtube.com/watch?v=A4Z2o6JZ6vQ", :week => 3, :lecture => 7
Youtube.create :title => "What is the derivative of a constant multiple of \\(f(x)\\)?", :url => "https://www.youtube.com/watch?v=1v2FEbVyu9A", :week => 3, :lecture => 8
Youtube.create :title => "Why is the derivative of \\(x^2\\) equal to \\(2x\\)?", :url => "https://www.youtube.com/watch?v=-a9gGq5Ya0U", :week => 3, :lecture => 9
Youtube.create :title => "What is the derivative of \\(x^n\\)?", :url => "https://www.youtube.com/watch?v=XIXctIdQxwg", :week => 3, :lecture => 10
Youtube.create :title => "What is the derivative of \\(x^3 + x^2\\)?", :url => "https://www.youtube.com/watch?v=O1njJq7eJps", :week => 3, :lecture => 11
Youtube.create :title => "Why is the derivative of a sum the sum of derivatives?", :url => "https://www.youtube.com/watch?v=7enfyOJ-y9g", :week => 3, :lecture => 12
Youtube.create :title => "What will Week 4 bring us?", :url => "https://www.youtube.com/watch?v=v6f_nVAZ3Yo", :week => 4, :lecture => 0
Youtube.create :title => "What is the derivative of \\(f(x)\\,g(x)\\)?", :url => "https://www.youtube.com/watch?v=SQh32rBqoEM", :week => 4, :lecture => 1
Youtube.create :title => "Morally, why is the product rule true?", :url => "https://www.youtube.com/watch?v=8Ow_O1JZTLs", :week => 4, :lecture => 2
Youtube.create :title => "How does one justify the product rule?", :url => "https://www.youtube.com/watch?v=9XcdhAtPP_0", :week => 4, :lecture => 3
Youtube.create :title => "What is the quotient rule?", :url => "https://www.youtube.com/watch?v=oFdEq7PeSSI", :week => 4, :lecture => 4
Youtube.create :title => "How can I remember the quotient rule?", :url => "https://www.youtube.com/watch?v=60d3vBN7_4g", :week => 4, :lecture => 5
Youtube.create :title => "What is the meaning of the derivative of the derivative?", :url => "https://www.youtube.com/watch?v=_qhNuh_1CkI", :week => 4, :lecture => 6
Youtube.create :title => "What does the sign of the second derivative encode?", :url => "https://www.youtube.com/watch?v=AeGwV7-vN_k", :week => 4, :lecture => 7
Youtube.create :title => "What does d/dx mean by itself?", :url => "https://www.youtube.com/watch?v=wouMgDxvMSY", :week => 4, :lecture => 8
Youtube.create :title => "What are extreme values?", :url => "https://www.youtube.com/watch?v=I8SxE4r_9iU", :week => 4, :lecture => 9
Youtube.create :title => "How can I find extreme values?", :url => "https://www.youtube.com/watch?v=tIQSvxL9LoE", :week => 4, :lecture => 10
Youtube.create :title => "Do all local minimums look basically the same when you zoom in?", :url => "https://www.youtube.com/watch?v=1DMZRID35eA", :week => 4, :lecture => 11
Youtube.create :title => "How can I sketch a graph by hand?", :url => "https://www.youtube.com/watch?v=FZGKh2oCrxk", :week => 4, :lecture => 12
Youtube.create :title => "What is a function which is its own derivative?", :url => "https://www.youtube.com/watch?v=MUauO2T8x5o", :week => 4, :lecture => 13
Youtube.create :title => "Is there anything more to learn about derivatives?", :url => "https://www.youtube.com/watch?v=t-2nrKDKk_g", :week => 5, :lecture => 0
Youtube.create :title => "What is the chain rule?", :url => "https://www.youtube.com/watch?v=XI42FQxS8po", :week => 5, :lecture => 1
Youtube.create :title => "What is the derivative of \\((1+2x)^5\\) and \\(\\sqrt{x^2 + 0.0001}\\)?", :url => "https://www.youtube.com/watch?v=P32jRIxroMA", :week => 5, :lecture => 2
Youtube.create :title => "What is implicit differentiation?", :url => "https://www.youtube.com/watch?v=njmEfWPk16U", :week => 5, :lecture => 3
Youtube.create :title => "What is the folium of Descartes?", :url => "https://www.youtube.com/watch?v=Kl9meA-BpcI", :week => 5, :lecture => 4
Youtube.create :title => "How does the derivative of the inverse relate to the original?", :url => "https://www.youtube.com/watch?v=50i9-lVoIWs", :week => 5, :lecture => 5
Youtube.create :title => "What is the derivative of log?", :url => "https://www.youtube.com/watch?v=OI54BghwqnM", :week => 5, :lecture => 6
Youtube.create :title => "What is logarithmic differentiation?", :url => "https://www.youtube.com/watch?v=QumjEW2QexQ", :week => 5, :lecture => 7
Youtube.create :title => "How can we multiply quickly?", :url => "https://www.youtube.com/watch?v=LcJPGsWErdQ", :week => 5, :lecture => 8
Youtube.create :title => "How do we justify the power rule?", :url => "https://www.youtube.com/watch?v=3tNfUnTsEoc", :week => 5, :lecture => 9
Youtube.create :title => "How can logarithms help to prove the product rule?", :url => "https://www.youtube.com/watch?v=_O8jWuYs2uE", :week => 5, :lecture => 10
Youtube.create :title => "How do we prove the quotient rule?", :url => "https://www.youtube.com/watch?v=MEtnfhMlNi4", :week => 5, :lecture => 11
Youtube.create :title => "How does one prove the chain rule?", :url => "https://www.youtube.com/watch?v=r3d81ZtG8_8", :week => 5, :lecture => 12
Youtube.create :title => "What are transcendental functions?", :url => "https://www.youtube.com/watch?v=CiwkkUkqQkA", :week => 6, :lecture => 0
Youtube.create :title => "Why does trigonometry work?", :url => "https://www.youtube.com/watch?v=dmE0ANslUJc", :week => 6, :lecture => 1
Youtube.create :title => "Why are there these other trigonometric functions?", :url => "https://www.youtube.com/watch?v=3mDIJ5N8N-I", :week => 6, :lecture => 2
Youtube.create :title => "What is the derivative of sine and cosine?", :url => "https://www.youtube.com/watch?v=jQumrWkL4ig", :week => 6, :lecture => 3
Youtube.create :title => "What is the derivative of \\(\\tan x\\)?", :url => "https://www.youtube.com/watch?v=S0K_PH9k0fw", :week => 6, :lecture => 4
Youtube.create :title => "What are the derivatives of the other trigonometric functions?", :url => "https://www.youtube.com/watch?v=UajbNOS0GA8", :week => 6, :lecture => 5
Youtube.create :title => "What is the derivative of \\(\\sin(x^2)\\)?", :url => "https://www.youtube.com/watch?v=8P_mOivrx0w", :week => 6, :lecture => 6
Youtube.create :title => "What are inverse trigonometric functions?", :url => "https://www.youtube.com/watch?v=5A0_FnvK1uQ", :week => 6, :lecture => 7
Youtube.create :title => "What are the derivatives of inverse trig functions?", :url => "https://www.youtube.com/watch?v=8hnZjifB9YQ", :week => 6, :lecture => 8
Youtube.create :title => "Why do sine and cosine oscillate?", :url => "https://www.youtube.com/watch?v=CD0AVB7J7DM", :week => 6, :lecture => 9
Youtube.create :title => "How can we get a formula for \\(\\sin(a+b)\\)?", :url => "https://www.youtube.com/watch?v=H_qImFAluu0", :week => 6, :lecture => 10
Youtube.create :title => "How can I approximate \\(\\sin 1\\)?", :url => "https://www.youtube.com/watch?v=DIa7rf-jOlM", :week => 6, :lecture => 11
Youtube.create :title => "How can we multiply numbers with trigonometry?", :url => "https://www.youtube.com/watch?v=MfZgSqeRep8", :week => 6, :lecture => 12
Youtube.create :title => "What applications of the derivative will we do this week?", :url => "https://www.youtube.com/watch?v=t66-JTpzJt8", :week => 7, :lecture => 0
Youtube.create :title => "How can derivatives help us to compute limits?", :url => "https://www.youtube.com/watch?v=1RQltqUDG3M", :week => 7, :lecture => 1
Youtube.create :title => "How can l'Hopital help with limits not of the form \\(0/0\\)?", :url => "https://www.youtube.com/watch?v=I0CLMzL4Zao", :week => 7, :lecture => 2
Youtube.create :title => "Why shouldn't I fall in love with l'Hopital?", :url => "https://www.youtube.com/watch?v=2Kn5C0Ba_k8", :week => 7, :lecture => 3
Youtube.create :title => "How long until the gray goo destroys Earth?", :url => "https://www.youtube.com/watch?v=wp8mjRO09_M", :week => 7, :lecture => 4
Youtube.create :title => "What does a car sound like as it drives past?", :url => "https://www.youtube.com/watch?v=mhx4_2ECgfM", :week => 7, :lecture => 5
Youtube.create :title => "How fast does the shadow move?", :url => "https://www.youtube.com/watch?v=g3TX71xdZME", :week => 7, :lecture => 6
Youtube.create :title => "How fast does the ladder slide down the building?", :url => "https://www.youtube.com/watch?v=rlkdGNtVyfE", :week => 7, :lecture => 7
Youtube.create :title => "How quickly does a bowl fill with green water?", :url => "https://www.youtube.com/watch?v=BwbvsenVNJU", :week => 7, :lecture => 8
Youtube.create :title => "How quickly does the water level rise in a cone?", :url => "https://www.youtube.com/watch?v=4PgkCVW5ROY", :week => 7, :lecture => 9
Youtube.create :title => "How quickly does a balloon fill with air?", :url => "https://www.youtube.com/watch?v=AQeVv1b4wbA", :week => 7, :lecture => 10
Youtube.create :title => "What sorts of optimization problems will calculus help us solve?", :url => "https://www.youtube.com/watch?v=5cM3E1Q-dhg", :week => 8, :lecture => 0
Youtube.create :title => "What is the extreme value theorem?", :url => "https://www.youtube.com/watch?v=4-r_ifoXjX8", :week => 8, :lecture => 1
Youtube.create :title => "How do I find the maximum and minimum values of f on a given domain?", :url => "https://www.youtube.com/watch?v=PB1pdsvEWnI", :week => 8, :lecture => 2
Youtube.create :title => "Why do we have to bother checking the endpoints?", :url => "https://www.youtube.com/watch?v=1MkxyjP1efs", :week => 8, :lecture => 3
Youtube.create :title => "Why bother considering where the function is not differentiable?", :url => "https://www.youtube.com/watch?v=edJ20Na4mdk", :week => 8, :lecture => 4
Youtube.create :title => "How can you build the best fence for your sheep?", :url => "https://www.youtube.com/watch?v=mN1kssn1_DY", :week => 8, :lecture => 5
Youtube.create :title => "How large can \\(xy\\) be if \\(x + y = 24\\)?", :url => "https://www.youtube.com/watch?v=-CQgXZ5qVuM", :week => 8, :lecture => 6
Youtube.create :title => "How do you design the best soup can?", :url => "https://www.youtube.com/watch?v=5HnVLjUQRNI", :week => 8, :lecture => 7
Youtube.create :title => "Where do three bubbles meet?", :url => "https://www.youtube.com/watch?v=5wDqfkZkO_4", :week => 8, :lecture => 8
Youtube.create :title => "How large of an object can you carry around a corner?", :url => "https://www.youtube.com/watch?v=6yuN7jOQufM", :week => 8, :lecture => 9
Youtube.create :title => "How short of a ladder will clear a fence?", :url => "https://www.youtube.com/watch?v=2_L9MoFCKiA", :week => 8, :lecture => 10
Youtube.create :title => "What is up with all the numerical analysis this week?", :url => "https://www.youtube.com/watch?v=hDv32v3bZCQ", :week => 9, :lecture => 0
Youtube.create :title => "Where does \\(f(x+h) = f(x) + h f'(x)\\) come from?", :url => "https://www.youtube.com/watch?v=rlyfX3eBo0Q", :week => 9, :lecture => 1
Youtube.create :title => "What is the volume of an orange rind?", :url => "https://www.youtube.com/watch?v=fnS9DISb7KU", :week => 9, :lecture => 2
Youtube.create :title => "What happens if I repeat linear approximation?", :url => "https://www.youtube.com/watch?v=nViHJcbSVPc", :week => 9, :lecture => 3
Youtube.create :title => "Why is \\(log_2 3\\) approximately \\(19/12\\)?", :url => "https://www.youtube.com/watch?v=NYrhfyCyZW0", :week => 9, :lecture => 4
Youtube.create :title => "What does \\(dx\\) mean by itself?", :url => "https://www.youtube.com/watch?v=CGlpya6ctEw", :week => 9, :lecture => 5
Youtube.create :title => "What is Newton's method?", :url => "https://www.youtube.com/watch?v=3WMIHCcyhO0", :week => 9, :lecture => 6
Youtube.create :title => "What is a root of the polynomial x^5 + x^2 - 1?", :url => "https://www.youtube.com/watch?v=Pb_GV65yAFA", :week => 9, :lecture => 7
Youtube.create :title => "How can Newton's method help me to divide quickly?", :url => "https://www.youtube.com/watch?v=AoVI9NWegWw", :week => 9, :lecture => 8
Youtube.create :title => "What is the mean value theorem?", :url => "https://www.youtube.com/watch?v=531Tb01wFcg", :week => 9, :lecture => 9
Youtube.create :title => "Why does \\(f'(x)\\) positive imply that \\(f\\) is increasing?", :url => "https://www.youtube.com/watch?v=3x99ymCGE9g", :week => 9, :lecture => 10
Youtube.create :title => "Should I bother to find the point \\(c\\) in the mean value theorem?", :url => "https://www.youtube.com/watch?v=0cgkSjfwNSE", :week => 9, :lecture => 11
Youtube.create :title => "What does it mean to antidifferentiate?", :url => "https://www.youtube.com/watch?v=07exNK9WbWY", :week => 10, :lecture => 0
Youtube.create :title => "How do we handle the fact that there are many antiderivatives?", :url => "https://www.youtube.com/watch?v=U4iyGXDMYyY", :week => 10, :lecture => 1
Youtube.create :title => "What is the antiderivative of a sum?", :url => "https://www.youtube.com/watch?v=qwLqbGLRXNQ", :week => 10, :lecture => 2
Youtube.create :title => "What is an antiderivative for \\(x^n\\)?", :url => "https://www.youtube.com/watch?v=3QfbofIquhg", :week => 10, :lecture => 3
Youtube.create :title => "What is the most general antiderivative of \\(1/x\\)?", :url => "https://www.youtube.com/watch?v=zjQm5gMPMZI", :week => 10, :lecture => 4
Youtube.create :title => "What are antiderivatives of trigonometric functions?", :url => "https://www.youtube.com/watch?v=yHkoelvIVzA", :week => 10, :lecture => 5
Youtube.create :title => "What are antiderivatives of \\(e^x\\) and natural log?", :url => "https://www.youtube.com/watch?v=g51sFbqqDrU", :week => 10, :lecture => 6
Youtube.create :title => "How difficult is factoring compared to multiplying?", :url => "https://www.youtube.com/watch?v=g2cnpiuuxxY", :week => 10, :lecture => 7
Youtube.create :title => "What is an antiderivative for \\(e^{-x^2}\\)?", :url => "https://www.youtube.com/watch?v=JvuiL6vT_aI", :week => 10, :lecture => 8
Youtube.create :title => "What is the antiderivative of \\(f(mx+b)\\)?", :url => "https://www.youtube.com/watch?v=vvlsJNqxsSc", :week => 10, :lecture => 9
Youtube.create :title => "Knowing my velocity, what is my position?", :url => "https://www.youtube.com/watch?v=yevUqp9xIRE", :week => 10, :lecture => 10
Youtube.create :title => "Knowing my acceleration, what is my position?", :url => "https://www.youtube.com/watch?v=Ep-h554mOIM", :week => 10, :lecture => 11
Youtube.create :title => "What is the antiderivative of sine squared?", :url => "https://www.youtube.com/watch?v=uNy4NCOT2Gc", :week => 10, :lecture => 12
Youtube.create :title => "What is a slope field?", :url => "https://www.youtube.com/watch?v=kuvydz3qAgM", :week => 10, :lecture => 13
Youtube.create :title => "If we are not differentiating, what are we going to do?", :url => "https://www.youtube.com/watch?v=r9x1tgBPESI", :week => 11, :lecture => 0
Youtube.create :title => "How can I write sums using a big Sigma?", :url => "https://www.youtube.com/watch?v=swR5toRiw_0", :week => 11, :lecture => 1
Youtube.create :title => "What is the sum \\(1 + 2 + \\cdots + k\\)?", :url => "https://www.youtube.com/watch?v=eRSip64OS-o", :week => 11, :lecture => 2
Youtube.create :title => "What is the sum of the first \\(k\\) odd numbers?", :url => "https://www.youtube.com/watch?v=q3of2t81Hh0", :week => 11, :lecture => 3
Youtube.create :title => "What is the sum of the first \\(k\\) perfect squares?", :url => "https://www.youtube.com/watch?v=uPlkqV-LrRw", :week => 11, :lecture => 4
Youtube.create :title => "What is the sum of the first \\(k\\) perfect cubes?", :url => "https://www.youtube.com/watch?v=7EYl5BB8Hd8", :week => 11, :lecture => 5
Youtube.create :title => "What does area even mean?", :url => "https://www.youtube.com/watch?v=jc92jkNJlNo", :week => 11, :lecture => 6
Youtube.create :title => "How can I approximate the area of a curved region?", :url => "https://www.youtube.com/watch?v=jPPjXmpE5a0", :week => 11, :lecture => 7
Youtube.create :title => "What is the definition of the integral of \\(f(x)\\) from \\(x = a\\) to \\(b\\)?", :url => "https://www.youtube.com/watch?v=JSX5mNPb5tc", :week => 11, :lecture => 8
Youtube.create :title => "What is the integral of \\(x^2\\) from \\(x = 0\\) to \\(1\\)?", :url => "https://www.youtube.com/watch?v=gzFfNgt8H_g", :week => 11, :lecture => 9
Youtube.create :title => "What is the integral of \\(x^3\\) from \\(x = 1\\) to \\(2\\)?", :url => "https://www.youtube.com/watch?v=YONbHxCTyh4", :week => 11, :lecture => 10
Youtube.create :title => "When is the accumulation function increasing? Decreasing?", :url => "https://www.youtube.com/watch?v=W8JLJfJgDv8", :week => 11, :lecture => 11
Youtube.create :title => "What sorts of properties does the integral satisfy?", :url => "https://www.youtube.com/watch?v=agne1GeA6tA", :week => 11, :lecture => 12
Youtube.create :title => "What is \\( \\int_{-1}^1 \\sin x \\, dx \\)?", :url => "https://www.youtube.com/watch?v=o7-WgkkgUfg", :week => 11, :lecture => 13
Youtube.create :title => "What is the big deal about the fundamental theorem of calculus?", :url => "https://www.youtube.com/watch?v=84n-iNxTcAQ", :week => 12, :lecture => 0
Youtube.create :title => "What is the fundamental theorem of calculus?", :url => "https://www.youtube.com/watch?v=j8dCmyVfVm8", :week => 12, :lecture => 1
Youtube.create :title => "How can I use the fundamental theorem of calculus to integrate?", :url => "https://www.youtube.com/watch?v=mAqeTwDXzm4", :week => 12, :lecture => 2
Youtube.create :title => "What is \\( \\int_0^\\pi \\sin x \\, dx \\)?", :url => "https://www.youtube.com/watch?v=ofpao0pfpaA", :week => 12, :lecture => 3
Youtube.create :title => "What is \\( \\int_0^1 x^4 \\, dx\\)?", :url => "https://www.youtube.com/watch?v=MhFGmJM-P5w", :week => 12, :lecture => 4
Youtube.create :title => "What is the area between the graphs of \\(y = \\sqrt{x}\\) and \\(y = x^2\\)?", :url => "https://www.youtube.com/watch?v=honQlJp-sIc", :week => 12, :lecture => 5
Youtube.create :title => "What is the area between the graphs of \\(y = x^2\\) and \\(y = 1 - x^2\\)?", :url => "https://www.youtube.com/watch?v=xTRpVFhfCyA", :week => 12, :lecture => 6
Youtube.create :title => "What is the accumulation function for \\(\\sqrt{1-x^2}\\)?", :url => "https://www.youtube.com/watch?v=FfnBVHsDJ-I", :week => 12, :lecture => 7
Youtube.create :title => "Why does the Euler method resemble a Riemann sum?", :url => "https://www.youtube.com/watch?v=pETygfzZKoc", :week => 12, :lecture => 8
Youtube.create :title => "In what way is summation like integration?", :url => "https://www.youtube.com/watch?v=OHp8m7a6n54", :week => 12, :lecture => 9
Youtube.create :title => "What is the sum of \\(n^4\\) for \\(n = 1\\) to \\(n = k\\)?", :url => "https://www.youtube.com/watch?v=wRKaa103xAs", :week => 12, :lecture => 10
Youtube.create :title => "Physically, why is the fundamental theorem of calculus true?", :url => "https://www.youtube.com/watch?v=O4-hCavHVD0", :week => 12, :lecture => 11
Youtube.create :title => "What is \\( \\frac{d}{da} \\int_a^b f(x) \\, dx\\)?", :url => "https://www.youtube.com/watch?v=Rr3aGKOu-bg", :week => 12, :lecture => 12
Youtube.create :title => "How is this course structured?", :url => "https://www.youtube.com/watch?v=F5djgDC7rSQ", :week => 13, :lecture => 0
Youtube.create :title => "How does the chain rule help with antidifferentiation?", :url => "https://www.youtube.com/watch?v=YXnKTs-4ZC4", :week => 13, :lecture => 1
Youtube.create :title => "When I do \\(u\\)-substitution, what should \\(u\\) be?", :url => "https://www.youtube.com/watch?v=impSmHT4JBE", :week => 13, :lecture => 2
Youtube.create :title => "How should I handle the endpoints when doing \\(u\\)-substitution?", :url => "https://www.youtube.com/watch?v=_E5Jq7gYoTg", :week => 13, :lecture => 3
Youtube.create :title => "Might I want to do \\(u\\)-substitution more than once?", :url => "https://www.youtube.com/watch?v=tQ2HSFF4mVw", :week => 13, :lecture => 4
Youtube.create :title => "What is \\( \\int \\frac{dx}{x^2 + 4x + 7} \\)?", :url => "https://www.youtube.com/watch?v=m4SbddauzfU", :week => 13, :lecture => 5
Youtube.create :title => "What is \\( \\int_0^1 (x+10)(x-1)^10 \\, dx\\)?", :url => "https://www.youtube.com/watch?v=tbfxxezg4Lw", :week => 13, :lecture => 6
Youtube.create :title => "What is \\( \\int \\frac{x}{(x+1)^(1/3)} \\, dx\\)?", :url => "https://www.youtube.com/watch?v=8g4UTwNeDVA", :week => 13, :lecture => 7
Youtube.create :title => "What is \\( \\int \\frac{dx}{1 + cos x} \\)?", :url => "https://www.youtube.com/watch?v=8Y1r-W_l7Ho", :week => 13, :lecture => 8
Youtube.create :title => "What is \\( \\frac{d}{dx} \\int_{t=0}^{x^2} \\sin t \\, dt\\)?", :url => "https://www.youtube.com/watch?v=ZEN5rlK71IA", :week => 13, :lecture => 9
Youtube.create :title => "Formally, why is the fundamental theorem of calculus true?", :url => "https://www.youtube.com/watch?v=8f0LItRMVJI", :week => 13, :lecture => 10
Youtube.create :title => "Without resorting to the FTC, why does substitution work?", :url => "https://www.youtube.com/watch?v=_d3zQcMbx4Y", :week => 13, :lecture => 11
Youtube.create :title => "What remains to be done?", :url => "https://www.youtube.com/watch?v=CfdsicGAMDQ", :week => 14, :lecture => 0
Youtube.create :title => "What antidifferentiation rule is the product rule in reverse?", :url => "https://www.youtube.com/watch?v=WSjwIgxLUBI", :week => 14, :lecture => 1
Youtube.create :title => "What is an antiderivative of \\(x\\,e^x\\)?", :url => "https://www.youtube.com/watch?v=JIDATJm-wzQ", :week => 14, :lecture => 2
Youtube.create :title => "How does parts help when antidifferentiating \\(\\log x\\)?", :url => "https://www.youtube.com/watch?v=YqgOsRxgl5g", :week => 14, :lecture => 3
Youtube.create :title => "What is an antiderivative of \\(e^x\\,\\cos x\\)?", :url => "https://www.youtube.com/watch?v=qJYbZeRtvxk", :week => 14, :lecture => 4
Youtube.create :title => "What is an antiderivative of \\(e^{\\sqrt{x}}\\)?", :url => "https://www.youtube.com/watch?v=L15f0zQLLiw", :week => 14, :lecture => 5
Youtube.create :title => "What is an antiderivative of \\(\\sin^{2n+1} x\\, \\cos^{2n} x\\)?", :url => "https://www.youtube.com/watch?v=QSBM9HvQ0-o", :week => 14, :lecture => 6
Youtube.create :title => "What is \\( \\int_0^\\pi \\sin^{2n} x\\, dx\\)?", :url => "https://www.youtube.com/watch?v=wxXRj7sBwi8", :week => 14, :lecture => 7
Youtube.create :title => "What is \\( \\int \\sin^n x \\, dx\\) in terms of \\(\\int \\sin^{n-2} x\\, dx\\)?", :url => "https://www.youtube.com/watch?v=GU6otu4QEgo", :week => 14, :lecture => 8
Youtube.create :title => "Why is \\(\\pi\\) less than 22/7?", :url => "https://www.youtube.com/watch?v=XCKFjql-D7U", :week => 14, :lecture => 9
Youtube.create :title => "What application of integration will we consider?", :url => "https://www.youtube.com/watch?v=M2rzUUoaAr0", :week => 15, :lecture => 0
Youtube.create :title => "What happens when I use thin horizontal rectangles to compute area?", :url => "https://www.youtube.com/watch?v=VNN5GDeUEGE", :week => 15, :lecture => 1
Youtube.create :title => "When should I use horizontal as opposed to vertical pieces?", :url => "https://www.youtube.com/watch?v=3HcVfJhBPIQ", :week => 15, :lecture => 2
Youtube.create :title => "What does \"volume\" even mean?", :url => "https://www.youtube.com/watch?v=dShINE8h2Q8", :week => 15, :lecture => 3
Youtube.create :title => "What is the volume of a sphere?", :url => "https://www.youtube.com/watch?v=kjw-2scC79g", :week => 15, :lecture => 4
Youtube.create :title => "How do washers help to compute the volume of a solid of revolution?", :url => "https://www.youtube.com/watch?v=nQe0H4ldjf4", :week => 15, :lecture => 5
Youtube.create :title => "What is the volume of a thin shell?", :url => "https://www.youtube.com/watch?v=RU6UWJv6kjw", :week => 15, :lecture => 6
Youtube.create :title => "What is the volume of a sphere with a hole drilled in it?", :url => "https://www.youtube.com/watch?v=mQFcq3qn8CU", :week => 15, :lecture => 7
Youtube.create :title => "What does \"length\" even mean?", :url => "https://www.youtube.com/watch?v=EFMPojVKeMo", :week => 15, :lecture => 8
Youtube.create :title => "On the graph of \\(y^2 = x^3\\), what is the length of a certain arc?", :url => "https://www.youtube.com/watch?v=G9hDwNlFqjc", :week => 15, :lecture => 9
Youtube.create :title => "This title is missing a question mark.", :url => "https://www.youtube.com/watch?v=zErVTSG6WBU", :week => 15, :lecture => 10
