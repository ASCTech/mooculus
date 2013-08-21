class Developer
  extend Ambry::Model
  field :name, :description, :email, :link, :photo
end

Developer.create :name => "Bart Snapp", :photo => "bart-snapp",
  :description => 'Bart Snapp teaches mathematics at OSU.  His research interests include commutative ring theory and recreational mathematics.  He enjoys exploring connections between mathematics and real-world problems, art, and music.  Bart is the head instructor for MOOCulus.',
  :link => 'http://www.math.osu.edu/~snapp/', 
  :email =>'snapp.14@osu.edu'

Developer.create :name => "Jim Fowler", :photo => "jim-fowler",
  :description => 'Jim\'s research broadly includes geometry and topology; specifically, his interests focus on the topology of high-dimensional manifolds and geometric group theory, which means he thinks about highly symmetric (and therefore very beautiful) geometric objects.  He\'s fond of using computational techniques to attack problems in pure mathematics. He received an undergraduate degree from <a href="http://www.harvard.edu/">Harvard University</a> and received a Ph.D. from the <a href="http://www.uchicago.edu/">University of Chicago</a>.  Jim built the adaptive learning platform that powers MOOCulus.',
  :link => 'http://www.math.osu.edu/~fowler/',
  :email => 'fowler@math.osu.edu'


Developer.create :name => "Steve Gubkin", :photo => "steve-gubkin",
  :description => 'Steve Gubkin is a mathematics Ph.D. student at OSU.  Steve has extensive experience with the <a href="https://github.com/Khan/khan-exercises/" rel="external">khan exercise framework</a>, so for MOOCulus, he leads the development of <a href="/exercises">our interactive exercises</a>.',
  :link => 'http://www.math.osu.edu/people/gubkin.1/view',
  :email => 'gubkin@math.osu.edu'

Developer.create :name => "Tom Evans", :photo => "tom-evans",
  :description => 'Tom Evans is an Educational Technologist and the lead for open courses at the Ohio State University. You can follow him on Twitter at <a href="http://www.twitter.com/taevans">@taevans</a>.  For MOOCulus, Tom created the music and edited some of the videos.',
  :link => 'http://www.twitter.com/taevans',
  :email => 'evans.1517@osu.edu'

Developer.create :name => "Roman Holowinsky", :photo => "roman-holowinsky",
  :description => 'Roman Holowinsky has been a professor in the OSU Math Department since Fall 2010.  His research in the field of analytic number theory with a focus on L-functions and modular forms.  Roman is an Alfred P. Sloan fellow and the recipient of the 2011 SASTRA Ramanujan prize.',
  :link => 'http://www.math.osu.edu/~holowinsky.1',
  :email => 'romanh@math.osu.edu'


Developer.create :name => "Sean Corey", :photo => "sean-corey",
  :description => 'Sean teaches mathematics in secondary schools and is a proponent of independent learning. Game theory and the development of artificial intelligence are prominent interests of his.  For MOOCulus, Sean has developed some of the interactive exercises and edited the textbook.',
  :email => 'corey.osumath@gmail.com'


Developer.create :name => "Kevin Jones",
  :description => 'Kevin Jones is a Senior Producer/Director for Media Services at The Ohio State University; for MOOCulus, Kevin Jones handles the video editing.',
  :email => 'jones.51@osu.edu'

Developer.create :name => "Johann Thiel", :photo => "johann-thiel",
  :description => 'Johann Thiel is a postdoc at the United States Military Academy (West Point). His main research interests lie in analytic number theory and its applications. In his classes, Johann enjoys designing live demonstrations to illustrate mathematical concepts.  Johann has built some of the explorations for MOOCulus.',
  :email => 'johann.thiel@usma.edu'


Developer.create :name => "Chris Bolognese", :photo => "chris-bolognese",
  :description => 'Chris Bolognese has taught mathematics both at the high school and college level.  Next year he is the district teacher leader for mathematics K-12 for Upper Arlington Schools.  Chris enjoys mathematics competitions and mathematical technology.  For MOOCulus, Chris will be a teaching assistant and also contribute items for exercises.',
  :email => 'cbolognese@uaschools.org'


Developer.create :name => "David Lindberg", :photo => "david-lindberg",
  :description => 'David Lindberg is a mathematics masters student at OSU.  For Calculus One, David is performing data analysis on the exercises to help improve the educational aspects of MOOCulus.',
  :email => 'lindberg.24@buckeyemail.osu.edu'
