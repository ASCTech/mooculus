#! /usr/bin/ruby

require 'rubygems'
require 'erb'

def float(x)
  return '%0.5f' % x
end

input_tex_erb = ARGV[0]

template = ERB.new(File.open(input_tex_erb).read,0,'>')

f = File.open("render.tex","w")
f.puts template.result(binding)
f.close

f = IO.popen("pdflatex", "w")
f.puts template.result(binding)
f.close
