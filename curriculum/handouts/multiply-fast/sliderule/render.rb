#! /usr/bin/ruby

require 'rubygems'
require 'erb'
require "bigdecimal"
require "bigdecimal/math"
include BigMath

def float(x)
  return '%0.9f' % x
end

def irrational(x)
  sign, sigfigs, base, exponent = x.split

  result = ''
  result = '-' if sign < 0

  whole = '0'
  fractional = ''
  if exponent > 0
    whole = sigfigs[0...exponent]
    fractional = sigfigs[exponent..-1]
  end

  if exponent == 0
    whole = '0'
    fractional = sigfigs
  end

  if exponent < 0
    whole = '0'
    fractional = ('0' * (-exponent-1)) + sigfigs
  end

  result = result + whole + '.'

  scale = 1.0
  for i in 0...fractional.length
    scale = scale * 0.96 if i >= 3
    result = result + "\\scalebox{#{scale}}{#{fractional[i..i]}}"
  end

  result.gsub!( /\.$/, '' )

  return result
end

input_tex_erb = ARGV[0]

template = ERB.new(File.open(input_tex_erb).read,0,'>')

p = [0.1,0.2]

f = File.open("render.tex","w")
f.puts template.result(binding)
f.close

f = IO.popen("pdflatex", "w")
f.puts template.result(binding)
f.close
