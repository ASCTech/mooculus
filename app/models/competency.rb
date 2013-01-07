# Authors: original Python code on Wikipedia page "Viterbi algorithm"
#          MISHIMA, Hiroyuki for Ruby implementation
#          Jim Fowler (using logarithms to avoid numerical errors)

class Viterbi
  STATES = [ :knowing, :unknowing ]

  PRIORS = {
    :knowing => 0.05,
    :unknowing => 0.95,
  }

  TRANSITIONS = {
    :knowing => { :knowing => 0.8, :unknowing => 0.2 },
    :unknowing => { :knowing => 0.05, :unknowing => 0.95 },
  }
  
  EMISSIONS = {
    :knowing => { :ace => 0.5, :correct => 0.2, :incorrect => 0.2, :hint => 0.1 },
    :unknowing => { :ace => 0.2, :correct => 0.3, :incorrect => 0.3, :hint => 0.2 },
  }

  def Viterbi.viterbi(observations)
    v = Array.new
    v << Hash.new
    path = Hash.new

    # Initialize base cases (t==0)
    STATES.each do |state|
      v[0][state] = PRIORS[state] + Math.log(EMISSIONS[state][observations[0]])
      path[state] = [state]
    end

    # Run Viterbi for t > 0
    (1 ... (observations.length)).each do |t|
      v << Hash.new
      newpath = Hash.new
      
      STATES.each do |y|
        prob, state =
          STATES.map{|y0| [ v[t-1][y0] +
                            Math.log(TRANSITIONS[y0][y]) +
                            Math.log(EMISSIONS[y][observations[t]]),
                            y0 ]}.max_by{|pr| pr[0]}
        v[t][y] = prob
        newpath[y] = path[state] + [y]
      end
      # Don't need to remeber the old paths
      path = newpath.dup
    end
    prob, state =
      STATES.map{|y| [v[observations.length - 1][y], y]}.max_by{|pr| pr[0]}

    # return [v, prob, path[state]]

    knowing = v.last[:knowing]
    unknowing = v.last[:unknowing]
    p = 1.0 / (1.0 + Math.exp(unknowing - knowing))

    return p
  end
end

class Competency < ActiveRecord::Base
  attr_accessible :estimate, :exercise_id, :uncertainty, :user_id, :max_estimate, :min_estimate
  belongs_to :user
  belongs_to :exercise

  def Competency.update(user,exercise)
    # Gather recent scores in chronological order
    scores = ::Score.where( :exercise_id => exercise.id,
                            :user_id => user.id ).order('created_at DESC').limit( 35 ).reverse

    observations = scores.collect{ |x| x.summary }

    p = 0.25
    p = Viterbi.viterbi( observations ) if observations.length > 0

    conditions = {
      :user_id => user.id,
      :exercise_id => exercise.id }
    
    @competency = Competency.where(conditions).limit(1).first || Competency.create(conditions)

    if not @competency.estimate.nil?
      @competency.uncertainty = [ (p - @competency.estimate).abs, 1.0 - p, p ].min
    end

    if @competency.min_estimate.nil? or (@competency.min_estimate > p)
      @competency.min_estimate = p
    end

    if @competency.max_estimate.nil? or (@competency.max_estimate < p)
      @competency.max_estimate = p
    end

    @competency.estimate = p

    @competency.save

    return @competency
  end

end
