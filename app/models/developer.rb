class Developer
  extend Ambry::Model
  field :name, :description, :email, :link, :photo
end

Developer.create :name => "Bart Snapp", :photo => "bart-snapp",
  :description => 'Bart Snapp teaches mathematics at OSU.  His research interests include commutative ring theory, number theory, and recreational mathematics.  He enjoys exploring connections between mathematics and the real-world problems, art, and music. As an undergraduate, he was involved in distance teaching and learning though OSU\'s <a href="http://socrates.math.osu.edu/">CROSU</a> program.  Prior to OSU, he worked at <a href="http://www.coastal.edu/">Coastal Carolina University</a>. Bart earned his Ph.D. from the <a href="http://illinois.edu/">University Illinois at Urbana-Champaign</a>.  For Calculus One, Bart leads the development of the <a href="/handouts">the textbook</a> and contributes to exercises.',
  :link => 'http://www.math.osu.edu/~snapp/',
  :email => 'snapp@math.osu.edu'

Developer.create :name => "Jim Fowler", :photo => "jim-fowler",
  :description => 'Jim Fowler teaches mathematics at OSU.  His research interests broadly include geometry and topology, and more specifically, his interests focus on the topology of high-dimensional manifolds and geometric group theory, which means he gets to think about highly symmetric (and therefore very beautiful) geometric objects.  He\'s particularly fond of using computational techniques to attack problems in pure mathematics. Prior to OSU, he received an undergraduate degree from <a href="http://www.harvard.edu/">Harvard University</a> and received a Ph.D. from the <a href="http://www.uchicago.edu/">University of Chicago</a>.  Jim is the head instructor (&ldquo;project manager&rdquo;) for Calculus One.',
  :link => 'http://www.math.osu.edu/~fowler/',
  :email => 'fowler@math.osu.edu'


Developer.create :name => "Steve Gubkin", :photo => "steve-gubkin",
  :description => 'Steve Gubkin is a mathematics Ph.D. student at OSU.  Steve has extensive experience with the <a href="https://github.com/Khan/khan-exercises/" rel="external">khan exercise framework</a>, so for Calculus One, he leads the development of <a href="/exercises">our interactive exercises</a>.',
  :link => 'http://www.math.osu.edu/people/gubkin.1/view',
  :email => 'gubkin@math.osu.edu'


Developer.create :name => "Ryan Kowalick", :photo => "ryan-kowalick",
  :description => 'Ryan Kowalick is a mathematics Ph.D. student at OSU.  For Calculus One, Ryan uses his extensive backgroud in <a href="http://rubyonrails.org/" rel="external">Rails</a> to handle coding tasks for this website.',
  :link => 'http://www.math.osu.edu/people/kowalick.1',
  :email => 'rkowalick@math.osu.edu'


Developer.create :name => "Tom Evans", :photo => "tom-evans",
  :description => 'Tom Evans is an Educational Technologist and the lead for open courses at the Ohio State University. You can follow him on Twitter at <a href="http://www.twitter.com/taevans">@taevans</a>.  For Calculus One, Tom created the music and edited some of the videos.',
  :link => 'http://www.twitter.com/taevans',
  :email => 'evans.1517@osu.edu'

Developer.create :name => "Roman Holowinsky ", :photo => "roman-holowinsky",
  :description => 'Roman Holowinsky has been a professor in the OSU Math Department since Fall 2010.  His research in the field of analytic number theory with a focus on L-functions and modular forms.  Roman is an Alfred P. Sloan fellow and the recipient of the 2011 SASTRA Ramanujan prize.',
  :link => 'http://www.math.osu.edu/~holowinsky.1',
  :email => 'romanh@math.osu.edu'


Developer.create :name => "Sean Corey ", :photo => "sean-corey",
  :description => 'Sean teaches mathematics in secondary schools and is a proponent of independent learning. Game theory and the development of artificial intelligence are prominent interests of his.  For Calculus One, Sean has developed some of the interactive exercises and edited the textbook.',
  :email => 'corey.osumath@gmail.com'


Developer.create :name => "Sean Collins ", :photo => "sean-collins",
  :description => 'Originally from Cincinnati, Sean Collins is a senior at Ohio State majoring in  engineering physics; he\'s a big fan of chess and cards.  Sean is a teaching assistant for Calculus One.',
  :email => 'collins.999@osu.edu'


Developer.create :name => "Kevin Jones ",
  :description => 'Kevin Jones is a Senior Producer/Director for Media Services at The Ohio State University; for Calculus One, Kevin Jones handles the video editing.',
  :email => 'jones.51@osu.edu'


Developer.create :name => "Isaac Smith ",
  :description => 'Isaac Smith is an undergraduate at Ohio State; he is a teaching assistant for Calculus One.',
  :email => 'smith.7914@osu.edu'

