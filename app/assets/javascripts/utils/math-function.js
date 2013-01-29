var MathFunction = (function () {
    var my = {};

    /****************************************************************/
    // replace variables in an AST by another AST
    function substitute_ast(tree, bindings) {
	if (typeof tree === 'number') {
	    return tree;
	}    
	
	if (typeof tree === 'string') {
	    if (tree in bindings)
		return bindings[tree];
	    
	    return tree;
	}    
	
	var operator = tree[0];
	var operands = tree.slice(1);
	
	return $.merge( [operator], $.map( operands, function(v,i) { return [substitute_ast(v,bindings)]; } ) );
    };

    function tree_match( haystack, needle ) {
	var match = {};

	if (typeof needle === 'string') {
	    match[needle] = haystack;
	    return match;
	}

	if (typeof haystack === 'number') {
	    if (typeof needle === 'number') {
		if (needle === haystack) {
		    return {};
		}
	    }

	    return null;
	}

	if (typeof haystack === 'string') {
	    if (typeof needle === 'string') {
		match[needle] = haystack;
		return match;
	    }

	    return null;
	}

	var haystack_operator = haystack[0];
	var haystack_operands = haystack.slice(1);

	var needle_operator = needle[0];
	var needle_operands = needle.slice(1);

	if (haystack_operator === needle_operator) {
	    if (haystack_operands.length >= needle_operands.length) {
		var matches = {}

		$.each( needle_operands, function(i) {
		    var new_matches = tree_match( haystack_operands[i], needle_operands[i] );
		    
		    if (new_matches === null) {
			matches = null;
		    }

		    if (matches != null) {
			matches = $.extend( matches, new_matches );
		    }
		} );

		if (matches != null) {
		    matches = $.extend( matches, { remainder: haystack_operands.slice( needle_operands.length ) } );
		}

		return matches;
	    }

	    return null;
	}

	return null;
    };

    function subtree_matches(haystack, needle) {
	if (typeof haystack === 'number') {
	    return (typeof needle === 'string');
	}    
	
	if (typeof haystack === 'string') {
	    return (typeof needle === 'string');
	}    

	var match = tree_match( haystack, needle );
	if (match != null) {
	    return true;
	}

	var operator = haystack[0];
	var operands = haystack.slice(1);

	var any_matches = false;

	$.each( operands, function(i) {
	    if (subtree_matches(operands[i], needle))
		any_matches = true;
	} );

	return any_matches;
    };

    function replace_subtree(haystack, needle, replacement) {
	if (typeof haystack === 'number') {
	    return haystack;
	}    
	
	if (typeof haystack === 'string') {
	    if (typeof needle === 'string')
		if (needle === haystack)
		    return replacement;
	    
	    return haystack;
	}    

	var match = tree_match( haystack, needle );
	if (match != null) {
	    return $.merge( substitute_ast( replacement, match ), match.remainder );
	}

	var operator = haystack[0];
	var operands = haystack.slice(1);

	return $.merge( [operator], $.map( operands, function(v,i) { return [replace_subtree(v, needle, replacement)]; } ) );
    };

    function associate_ast( tree, op ) {
	var right_associator = [op, 'a', [op, 'b', 'c']];
	var left_associator = [op, [op, 'a', 'b'], 'c'];
	var associated = [op, 'a', 'b', 'c'];

	var keep_going = true;

	while( keep_going ) {
	    keep_going = false;

	    if (subtree_matches( tree, right_associator )) {
		tree = replace_subtree( tree, right_associator, associated );
		keep_going = true;
	    }

	    if (subtree_matches( tree, left_associator )) {
		tree = replace_subtree( tree, left_associator, associated );
		keep_going = true;
	    }

	}

	return tree;
    };

    function clean_ast( tree ) {
	tree = associate_ast( tree, '+' );
	tree = associate_ast( tree, '-' );
	tree = associate_ast( tree, '*' );

	return tree;
    };

    /****************************************************************/
    // evaluation code for our AST's

    var math_functions = {
	"+": function(operands) { var result = 0; $.each(operands,function() { result += this; }); return result; },
	"-": function(operands) { var result = operands[0]; $.each(operands.slice(1),function() { result -= this; }); return result; },
	"*": function(operands) { var result = operands[0]; $.each(operands.slice(1),function() { result *= this; }); return result; },
	"/": function(operands) { var result = operands[0]; $.each(operands.slice(1),function() { result /= this; }); return result; },
	"~": function(operands) { var result = 0; $.each(operands,function() { result -= this; }); return result; },
	"sin": function(operands) { return Math.sin(operands[0]); },
	"cos": function(operands) { return Math.cos(operands[0]); },
	"tan": function(operands) { return Math.tan(operands[0]); },
	"arcsin": function(operands) { return Math.arcsin(operands[0]); },
	"arccos": function(operands) { return Math.arccos(operands[0]); },
	"arctan": function(operands) { return Math.arctan(operands[0]); },
	"csc": function(operands) { return 1.0/Math.sin(operands[0]); },
	"sec": function(operands) { return 1.0/Math.cos(operands[0]); },
	"cot": function(operands) { return 1.0/Math.tan(operands[0]); },
	"sqrt": function(operands) { return Math.sqrt(operands[0]); },
	"log": function(operands) { return Math.log(operands[0]); },
	"^": function(operands) { return Math.pow(operands[0], operands[1]); },
    };

    function evaluate_ast(tree, bindings) {
	if (typeof tree === 'number') {
	    return tree;
	}

	if (typeof tree === 'string') {
	    if (tree in bindings)
		return bindings[tree];
	    
	    return tree;
	}    
	
	operator = tree[0];
	operands = tree.slice(1);

	if (operator in math_functions) {
	    return math_functions[operator]( $.map( operands, function(v,i) { return evaluate_ast(v,bindings); } ) );
	}
	
	return NaN;
    };

    /****************************************************************/
    // convert an AST to a LaTeX expression

    var latex_functions = {
	"+": function(operands) { return "\\left(" + operands.join( ' + ' ) + "\\right)"; },
	"-": function(operands) { return "\\left(" + operands.join( ' - ' ) + "\\right)"; },
	"~": function(operands) { return "- \\left( " + operands.join( ' + ' ) + "\\right)"; },
	"*": function(operands) { return "\\left(" + operands.join( " \\cdot " ) + "\\right)"; },
	"/": function(operands) { return "\\left(" + operands.join( " \\over " ) + "\\right)"; },
	"^": function(operands) { return operands[0] + "^" + operands[1]; },
	"sin": function(operands) { return "\\sin \\left(" + operands[0] + "\\right)"; },
	"cos": function(operands) { return "\\cos \\left(" + operands[0] + "\\right)"; },
	"tan": function(operands) { return "\\tan \\left(" + operands[0] + "\\right)"; },
	"arcsin": function(operands) { return "\\arcsin \\left(" + operands[0] + "\\right)"; },
	"arccos": function(operands) { return "\\arccos \\left(" + operands[0] + "\\right)"; },
	"arctan": function(operands) { return "\\arctan \\left(" + operands[0] + "\\right)"; },
	"csc": function(operands) { return "\\csc \\left(" + operands[0] + "\\right)"; },
	"sec": function(operands) { return "\\sec \\left(" + operands[0] + "\\right)"; },
	"cot": function(operands) { return "\\cot \\left(" + operands[0] + "\\right)"; },
	"log": function(operands) { return "\\log \\left(" + operands[0] + "\\right)"; },
	"sqrt": function(operands) { return "\\sqrt{" + operands[0] + "}"; },
    };

    function latex_ast(tree) {
	if (typeof tree === 'number') {
	    return tree;
	}

	if (typeof tree === 'string') {
	    if (tree == "pi")
		return "\\pi";
	    
	    return tree;
	}    
	
	var operator = tree[0];
	var operands = tree.slice(1);
	
	if (operator in math_functions) {
	    return "{" + latex_functions[operator]( $.map( operands, function(v,i) { return latex_ast(v); } ) ) + "}";
	}
	
	return NaN;
    };

    /****************************************************************/
    // differentiate an AST

    var derivatives = {
	"sin": mathFunctionParser.parse('cos x'),
	"cos": mathFunctionParser.parse('-(sin x)'),
	"tan": mathFunctionParser.parse('(sec x)^2'),
	"cot": mathFunctionParser.parse('-((csc x)^2)'),
	"sec": mathFunctionParser.parse('(sec x)*(tan x)'),
	"csc": mathFunctionParser.parse('-(csc x)*(cot x)'),
	"sqrt": mathFunctionParser.parse('1/(2*sqrt(x))'),
	"log": mathFunctionParser.parse('1/x'),
	"arcsin": mathFunctionParser.parse('1/sqrt(1 - x^2)'),
	"arccos": mathFunctionParser.parse('-1/sqrt(1 - x^2)'),
	"arctan": mathFunctionParser.parse('1/(1 + x^2)'),
    };
    
    function derivative_of_ast(tree,x,story) {
	var ddx = '\\frac{d}{d' + x + '} ';

	// Derivative of a constant
	if (typeof tree === 'number') {
	    story.push( 'The derivative of a constant is zero, that is, ' + ddx + latex_ast(tree) + ' = 0</code>.' );
	    return 0;
	}
	
	// Derivative of a variable
	if (typeof tree === 'string') {
	    if (x === tree) {
		story.push( 'We know the derivative of the identity function is one, that is, <code>' + ddx + latex_ast(tree) + ' = 1</code>.' );
		return 1;
	    }
	    
	    story.push( 'As far as <code>' + latex_ast(x) + '</code> is concerned, <code>' + latex_ast(tree) + '</code> is constant, so ' + ddx + latex_ast(tree) + ' = 0</code>.' );
	    return 0;
	}
    
	var operator = tree[0];
	var operands = tree.slice(1);

	// derivative of sum is sum of derivatives
	if ((operator === '+') || (operator === '-') || (operator === '~')) {
	    story.push( 'Using the sum rule, <code>' + ddx + latex_ast( tree ) + ' = ' + ($.map( operands, function(v,i) { return ddx + latex_ast(v); } )).join( ' + ' ) + '</code>.' );
	    var result = $.merge( [operator], $.map( operands, function(v,i) { return [derivative_of_ast(v,x,story)]; } ) );
	    story.push( 'So using the sum rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
	    return result;
	}
	
	// product rule
	if (operator === '*') {
	    var non_numeric_operands = [];
	    var numeric_operands = [];

	    for( var i=0; i<operands.length; i++ ) {
		if (typeof operands[i] === 'number') {
		    any_numbers = true;
		    numeric_operands.push( operands[i] );
		} else {
		    non_numeric_operands.push( operands[i] );
		} 
	    }

	    if (numeric_operands.length > 0) {
		var remaining = $.merge( ['*'], non_numeric_operands );
		if (non_numeric_operands.length == 1) 
		    remaining = non_numeric_operands[0];

		if (remaining === x) {
		    story.push( 'By the constant multiple rule, <code>' + ddx + latex_ast( tree ) + ' = ' + ($.map( numeric_operands, function(v,i) { return v; } )).join( ' \\cdot ' ) + '</code>.' );
		    var result = $.merge( ['*'], numeric_operands );
		    return result;
		}

		story.push( 'By the constant multiple rule, <code>' + ddx + latex_ast( tree ) + ' = ' + ($.map( numeric_operands, function(v,i) { return v; } )).join( ' \\cdot ' ) + ' \\cdot ' + ddx + '\\left(' + latex_ast(remaining) + '\\right)</code>.' );

		var d = derivative_of_ast(remaining,x,story);
		var result = $.merge( ['*'], $.merge( numeric_operands, [d] ) );
		
		story.push( 'And so <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    }

	    story.push( 'Using the product rule, <code>' + ddx + latex_ast( tree ) + ' = ' +
			($.map( operands, function(v,i) {
			    return ($.map( operands, function(w,j) {
				if (i == j)
				    return ddx + '\\left(' + latex_ast(v) + '\\right)';
				else
				    return latex_ast(v);
			    })).join( ' \\cdot ' ) })).join( ' + ' ) + '</code>.' );

	    var inner_operands = operands.slice();

	    var result = $.merge( ['+'], $.map( operands, function(v,i) {
		return [$.merge( ['*'], $.map( inner_operands, function(w,j) {
		    if (i == j) {
			var d = derivative_of_ast(w,x,story);
			// remove terms that have derivative 1
			if (d === 1)
			    return null;

			return [d];
		    } else {
			return [w];
		    }
		} ) )];
	    } ) );

	    story.push( 'So using the product rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );

	    return result;
	}
	
	// quotient rule
	if (operator === '/') {
	    var f = operands[0];
	    var g = operands[1];

	    story.push( 'Using the quotient rule, <code>' + ddx + latex_ast( tree ) + ' = \\frac{' + ddx + '\\left(' + latex_ast(f) + '\\right) \\cdot ' + latex_ast(g) + ' - ' + latex_ast(g) + '\\cdot ' + ddx + '\\left(' + latex_ast(g) + '\\right)}{ \\left( ' + latex_ast(g) + ' \\right)^2} </code>.' );

	    var a = derivative_of_ast(f,x,story);
	    var b = derivative_of_ast(g,x,story);
	    var f_prime = a;
	    var g_prime = b;

	    var quotient_rule = mathFunctionParser.parse('(a * g - f * b)/(g^2)');

	    var result = substitute_ast( quotient_rule, { "a": a, "b": b, "f": f, "g": g } );

	    story.push( 'So using the quotient rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );

	    return result;
	}
	
	// power rule
	if (operator === '^') {
	    var base = operands[0];
	    var exponent = operands[1];
	    
	    if (typeof exponent === 'number') {
		if ((typeof base === 'string') && (base === 'x')) {
		    var power_rule = mathFunctionParser.parse('n * (f^(n-1))');
		    var result = substitute_ast( power_rule, { "n": exponent, "f": base } );

		    story.push( 'By the power rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( exponent ) + ' \\cdot \\left(' + latex_ast( base ) + '\\right)^{' + latex_ast( ['-', exponent, 1] ) + '}</code>.' );

		    return result;
		}

		if (exponent != 1) {
		    story.push( 'By the power rule and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( exponent ) + ' \\cdot \\left(' + latex_ast( base ) + '\\right)^{' + latex_ast( ['-', exponent, 1] ) + '} \\cdot ' + ddx + latex_ast( base ) + '</code>.' );
		}

		var a = derivative_of_ast(base,x,story);

		if (exponent === 1)
		    return a;

		var power_rule = mathFunctionParser.parse('n * (f^(n-1)) * a');
		var result = substitute_ast( power_rule, { "n": exponent, "f": base, "a" : a } );

		story.push( 'So by the power rule and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    }
	    
	    if (base === 'e') {
		if ((typeof exponent === 'string') && (exponent === x)) {
		    var power_rule = mathFunctionParser.parse('e^(f)');
		    var result = substitute_ast( power_rule, { "f": exponent } );

		    story.push( 'The derivative of <code>e^' + latex_ast( x ) + '</code> is itself, that is, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( tree ) + '</code>.' );

		    return result;
		}
		
		story.push( 'Using the rule for <code>e^x</code> and the chain rule, we know <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( tree ) + ' \\cdot ' + ddx + latex_ast( exponent ) + '</code>.' );

		var power_rule = mathFunctionParser.parse('e^(f)*d');

		var d = derivative_of_ast(exponent,x,story);
		var result = substitute_ast( power_rule, { "f": exponent, "d": d } );

		story.push( 'So using the rule for <code>e^x</code> and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    }
	    
	    if (typeof base === 'number') {
		if ((typeof exponent === 'string') && (exponent === x)) {
		    var power_rule = mathFunctionParser.parse('a^(f) * log(a)');
		    var result = substitute_ast( power_rule, { "a": base, "f": exponent } );

		    story.push( 'The derivative of <code>a^' + latex_ast( x ) + '</code> is <code>a^{' + latex_ast( x ) + '} \, \log a</code>, that is, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( result ) + '</code>.' );

		    return result;
		}

		var exp_rule = mathFunctionParser.parse('a^(f) * log(a)');
		var partial_result = substitute_ast( exp_rule, { "a": base, "f": exponent } );

		story.push( 'Using the rule for <code>a^x</code> and the chain rule, we know <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( partial_result ) + ' \\cdot ' + ddx + latex_ast( exponent ) + '</code>.' );

		var power_rule = mathFunctionParser.parse('a^(b)*log(a)*d');
		var d = derivative_of_ast(exponent,x,story);
		var result = substitute_ast( power_rule, { "a": base, "b": exponent, "d": d } );

		story.push( 'So using the rule for <code>a^x</code> and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;		
	    }
	    
	    // general case of a function raised to a function
	    var f = base;
	    var g = exponent;

	    story.push( "Recall the general rule for exponents, namely that <code>\\frac{d}{dx} u(x)^{v(x)} = u(x)^{v(x)} \\cdot \\left( v'(x) \\cdot \\log u(x) + \\frac{v(x) \\cdot u'(x)}{u(x)} \\right)</code>.  In this case, <code>u(x) = " +  latex_ast( f ) + "</code> and <code>v(x) = " + latex_ast( g ) + "</code>." );

	    var a = derivative_of_ast(f,x,story);
	    var b = derivative_of_ast(g,x,story);

	    var power_rule = mathFunctionParser.parse('(f^g)*(b * log(f) + (g * a)/f)');
	    var result = substitute_ast( power_rule, { "a": a, "b": b, "f": f, "g": g } );

	    story.push( 'So by the general rule for exponents, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
	    return result;
	}
	
	// chain rule
	if (operator in derivatives) {
	    var input = operands[0];

	    if (typeof input == "number") {
		var result = 0;
		story.push( 'The derivative of a constant is zero so <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;		
	    } else if ((typeof input == "string") && (input == x)) {
		var result = ['*',
			      substitute_ast( derivatives[operator], { "x": input } )];
		story.push( 'It is the case that <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    } else if ((typeof input == "string") && (input != x)) {
		var result = 0;
		story.push( 'Since the derivative of a constant is zero, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    } else {
		story.push( 'Recall <code>\\frac{d}{du}' + latex_ast( [operator, 'u'] ) + ' = ' +
			    latex_ast( derivative_of_ast( [operator, 'u'], 'u', [] ) ) + '</code>.' );

		story.push( 'By the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(substitute_ast( derivatives[operator], { "x": input } )) + " \\cdot " + ddx + latex_ast(input)  + '</code>.' );	    

		var result = ['*',
			      substitute_ast( derivatives[operator], { "x": input } ),
			      derivative_of_ast( input, x, story )];
		
		story.push( 'So by the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    }
	}
	
	return 0;
    };

    /****************************************************************/
    //
    // The "story" that the differentiation code produces can be somewhat repetitive
    //
    // Here we fix this
    //

    function lowercaseFirstLetter(string)
    {
	return string.charAt(0).toLowerCase() + string.slice(1);
    }

    function simplify_story( story ) {
	// remove neighboring duplicates
	for (var i = story.length - 1; i >= 1; i--) {
	    if (story[i] == story[i-1])
		story.splice( i, 1 );
	}

	// Make it seem obvious that I know I am repeating myself
	for (var i = 0; i < story.length; i++ ) {
	    for( var j = i + 1; j < story.length; j++ ) {
		if (story[i] == story[j]) {
		    story[j] = 'Again, ' + lowercaseFirstLetter( story[j] );
		}
	    }
	}

	return story;
    };

    function randomBindings() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var result = new Object();
	for(var i=0; i<alphabet.length; i++) {
	    result[alphabet.charAt(i)] = Math.random() * 20.0 - 10.0;
	}
	return result;
    };
    
    function StraightLineProgram(tree)
    {
	this.syntax_tree = clean_ast(tree);
    }

    StraightLineProgram.prototype = {
	f: function(bindings) {
	    return evaluate_ast( this.syntax_tree, bindings );
	},
	
	evaluate: function(bindings) {
	    return evaluate_ast( this.syntax_tree, bindings );
	},
	
	tex: function() {
	    return latex_ast( this.syntax_tree );
	},
	
	equalsForBinding: function(other,bindings) {
	    var epsilon = 0.0001;
	    var this_evaluated = this.evaluate(bindings);	
	    var other_evaluated = other.evaluate(bindings);
	    return (Math.abs(this_evaluated - other_evaluated) < epsilon) ||
		(this_evaluated == other_evaluated) ||
		(isNaN(this_evaluated) && isNaN(other_evaluated));
	},
	
	derivative: function(x) {
	    var story = [];
	    return new StraightLineProgram(derivative_of_ast( this.syntax_tree, x, story ));
	},

	derivative_story: function(x) {
	    var story = [];
	    derivative_of_ast( this.syntax_tree, x, story );
	    story = simplify_story( story );
	    return story;
	},
	
	equals: function(other) {
	    var total_trials = 20;
	    var successful_trials = 0;
	    
            for( var i=0; i < total_trials; i++ ) {
		var bindings = randomBindings();
		if (this.equalsForBinding(other,bindings)) {
		    successful_trials++;
		}
	    }
	    return (successful_trials > 0.95 * total_trials);
	},
    };

    my.parse = function(string) {
	return new StraightLineProgram( mathFunctionParser.parse(string) );
    };

    return my;
}());

