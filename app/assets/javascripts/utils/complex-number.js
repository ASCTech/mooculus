/** ComplexNumber class
 * 
 * This code has been modified heavily by Jim Fowler <fowler@math.osu.edu>
 * 
 * @author Jan Hartigan
 * @inspiration http://www.java2s.com/Code/JavaScript/Language-Basics/Complexclasstorepresentcomplexnumbers.htm
 * @version 1.0.0 (2011-03-08)
 */

/**
 * @param Number	real
 * @param Number	imaginary
 */
function ComplexNumber(real,imaginary) {
	this.real = real;
	this.imaginary = imaginary;
}

//Then we make the prototype object for the class so we can perform actions on complex numbers (like multiplication, addition, etc.)
ComplexNumber.prototype = {
	/* The real part of the complex number
	 * 
	 * @type Number
	 */
	real: 0,
	
	/* The imaginary part of the complex number
	 * 
	 * @type Number
	 */
	imaginary: 0,
	
	/**
	 * The add operation which sums the real and complex parts separately
	 * 
	 * @param ==> 	If there is one argument, assume it's a ComplexNumber
	 * 				If there are two arguments, assume the first is the real part and the second is the imaginary part
	 * 
	 * @return ComplexNumber
	 */
	add: function() {
	    if(arguments.length == 1)
	        return new ComplexNumber(this.real + arguments[0].real, this.imaginary + arguments[0].imaginary);
	    else
	        return new ComplexNumber(this.real + arguments[0], this.imaginary + arguments[1]);
	},

	sum: function() {
	        return new ComplexNumber(this.real + arguments[0].real, this.imaginary + arguments[0].imaginary);
	},
	
	/**
	 * The subtract operation which subtracts the real and complex parts from one another separately
	 * 
	 * @param ==> 	If there is one argument, assume it's a ComplexNumber
	 * 				If there are two arguments, assume the first is the real part and the second is the imaginary part
	 * 
	 * @return ComplexNumber
	 */
	subtract: function() {
	    if(arguments.length == 1)
	        return new ComplexNumber(this.real - arguments[0].real, this.imaginary - arguments[0].imaginary);
	    else
	        return new ComplexNumber(this.real - arguments[0], this.imaginary - arguments[1]);
	},
	
	/**
	 * The multiplication operation which multiplies two complex numbers
	 * 
	 * @param ==> 	If there is one argument, assume it's a ComplexNumber
	 * 				If there are two, assume the first is the real part and the second is the imaginary part
	 * 
	 * @return ComplexNumber
	 */
	multiply: function() {
	    var multiplier = arguments[0];
		
	    if(arguments.length != 1)
	        multiplier = new ComplexNumber(arguments[0], arguments[1]);
		 
	    return new ComplexNumber(this.real * multiplier.real - this.imaginary * multiplier.imaginary, 
								this.real * multiplier.imaginary + this.imaginary * multiplier.real);
	},
	
	/**
	 * The modulus of a complex number
	 * 
	 * @return number
	 */
	modulus: function() {
	    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
	},

	/* The argument of a complex number, between 0 and 2*Math.pi
	 * 
	 * @return number
	 */
        argument: function() {
	    return Math.atan2( this.imaginary, this.real ) + Math.PI;
	},

	/**
	 * The string representation of a complex number (e.g. 4 + 3i)
	 * 
	 * @return String
	 */
	toString: function() {
	    return this.real + " + " + this.imaginary + "i";
	},

    real_part: function() {
	return this.real;
    },

    imaginary_part: function() {
	return this.real;
    },

    negate: function() {
	return new ComplexNumber( -this.real, -this.imaginary );
    },

    conjugate: function() {
	return new ComplexNumber( this.real, -this.imaginary );
    },

    exp: function() {
	var this_exp = Math.exp( this.real );

	return new ComplexNumber( (this_exp * Math.cos( this.imaginary )),
				  (this_exp * Math.sin( this.imaginary )) );
    },

    log: function() {
	var this_modulus = Math.log(Math.sqrt( this.real * this.real + this.imaginary * this.imaginary ));
	var this_argument = Math.atan2( this.imaginary, this.real );

	return new ComplexNumber( this_modulus, this_argument );
    },

    cos: function() {
	var this_exp_i = Math.exp( + this.imaginary );
	var this_exp_minus_i = Math.exp(-( this.imaginary ));

	return new ComplexNumber( (Math.cos(  this.real )*( this_exp_minus_i + this_exp_i )/2.0),
				  (Math.sin(  this.real )*( this_exp_minus_i - this_exp_i )/2.0) );
    },

    sin: function() {
	var this_exp_i = Math.exp( this.imaginary );
	var this_exp_minus_i = Math.exp(-( this.imaginary ));

	return new ComplexNumber( (Math.sin( this.real )*( this_exp_i + this_exp_minus_i )/2.0),
				  (Math.cos( this.real )*( this_exp_i - this_exp_minus_i )/2.0) );
    },

    power: function(other) {
	var this_log_modulus = Math.log(Math.sqrt( this.real * this.real + this.imaginary * this.imaginary ));
	var this_argument = Math.atan2( this.imaginary , this.real );
	var this_new_log_modulus =other.real * this_log_modulus - other.imaginary * this_argument;
	var this_new_argument =other.real * this_argument + other.imaginary * this_log_modulus;

	return new ComplexNumber( (Math.exp( this_new_log_modulus ) * Math.cos( this_new_argument )),
				  (Math.exp( this_new_log_modulus ) * Math.sin( this_new_argument )) );
    },

    sqrt: function() {
	return this.power( new ComplexNumber(0.5,0) );
    },

    divide: function(other) {
	var denominator = other.real * other.real + other.imaginary * other.imaginary;
	
	return new ComplexNumber( (( this.real * other.real + this.imaginary * other.imaginary ) / ( denominator )),
				  (( this.imaginary *other.real - this.real * other.imaginary ) / ( denominator )) );
	
	return this;
    },

    recriprocal: function() {
	return (new ComplexNumber(1,0)).divide( this );
    },

    tan: function() {
	return this.sin().divide( this.cos() );
    },

    sec: function() {
	var one = new ComplexNumber(1,0);
	return one.divide( this.cos() );
    },

    csc: function() {
	var one = new ComplexNumber(1,0);
	return one.divide( this.sin() );
    },

    cot: function() {
	var one = new ComplexNumber(1,0);
	return one.divide( this.tan() );
    },
    
    arcsin: function() {
	var minus_i = new ComplexNumber(0,-1);
	var i = new ComplexNumber(0,1);
	var one = new ComplexNumber(1,0);

	return ((i.multiply( this )).sum(  one.subtract( this.multiply( this ) ).sqrt() )).log().multiply( minus_i );
    },

    arccos: function() {
	var half_pi = new ComplexNumber( Math.PI / 2, 0 );

	return half_pi.subtract( this.arcsin() );
    },

    arctan: function() {
	var minus_i = new ComplexNumber(0,-1);
	var i = new ComplexNumber(0,1);
	var half_i = new ComplexNumber(0,0.5);
	var one = new ComplexNumber(1,0);
	
	return (one.subtract( i.multiply( this ) ).log()).subtract( 
	    one.sum( i.multiply( this ) ).log()
	).multiply( half_i );
    },
};
