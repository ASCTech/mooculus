## Live version

A [live demo](https://mooculus.osu.edu/) is available at [mooculus.osu.edu](https://mooculus.osu.edu/).  You may also be interested in enrolling in [the associated Coursera course](https://www.coursera.org/course/calc1).

The materials for our calculus two course are available at [https://github.com/kisonecat/sequences-and-series](https://github.com/kisonecat/sequences-and-series).

## Installation For OSX and Linux*

### Preliminaries

First you must install gcc. You can get it for free [here](https://github.com/downloads/kennethreitz/osx-gcc-installer/GCC-10.7-v2.pkg).

Next, install [MySQL server](http://dev.mysql.com/downloads/mysql); I recommend choosing the `dmg`.

### RVM And Bundler

Now you need to install [rvm](https://rvm.io). This can be
done by copy and pasting the following command into your terminal:

`\curl -L https://get.rvm.io | bash -s stable --ruby`

Hopefully, the installation was successful. If it wasn't, I recommend the "google the 
error message" strategy. You must now put the line 

`source ~/.rvm/scripts/rvm`

at the end of the (hidden) file `~/.bashrc`. Open a new terminal and check that you are using a new
version of ruby by running

`ruby --version`

You should see 1.9.3 in the output somewhere. If you see 1.8.7 or similar, something went
wrong and I will again punt to the troubleshooting strategy outlined above.

Now we will install bundler. This can be done by running

`gem install bundler`

### Geting Rails Up And Running

Go into the mooculus repo and run

`bundle install`

After doing this, we need some preliminary steps:

`cp config/database.yml.template config/database.yml`

`bundle exec rake db:migrate`

`bundle exec rake exercise:all`

Then, check that everything works with

`bundle exec rails server`

and navigate to `localhost:3000` in your browser!

### Upkeep

If you add more exercises, for them to be loaded, you must run

`bundle exec rake exercise:all`

\* *Linux users should be able to follow these instructions after insuring that* ```ruby, ruby-dev, libxml2-dev, libxslt-dev```  *and* ```libmysqlclient-dev``` *are installed*
