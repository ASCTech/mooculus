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
    
    function derivative_of_ast(tree,x) {
	// Derivative of a constant
	if (typeof tree === 'number') {
	    return 0;
	}
	
	// Derivative of a variable
	if (typeof tree === 'string') {
	    if (x === tree)
		return 1;
	    
	    return 0;
	}
    
	var operator = tree[0];
	var operands = tree.slice(1);

	// derivative of sum is sum of derivatives
	if ((operator === '+') || (operator === '-') || (operator === '~')) {
	    return $.merge( [operator], $.map( operands, function(v,i) { return [derivative_of_ast(v,x)]; } ) );
	}
	
	// product rule
	if (operator === '*') {
	    var inner_operands = $.extend({}, operands);
	    
	    return $.merge( ['+'], $.map( operands, function(v,i) {
		return [$.merge( ['*'], $.map( inner_operands, function(w,j) {
		    if (i == j) {
			var d = derivative_of_ast(w,x);
			// remove terms that have derivative 1
			if (d === 1)
			    return null;
			return [d];
		    } else {
			return [w];
		    }
		} ) )];
	    } ) );
	}
	
	// quotient rule
	if (operator === '/') {
	    var f = operands[0];
	    var g = operands[1];
	    var a = derivative_of_ast(f,x);
	    var b = derivative_of_ast(g,x);
	    
	    var quotient_rule = mathFunctionParser.parse('(a * g - f * b)/(g^2)');
	    return substitute_ast( quotient_rule, { "a": a, "b": b, "f": f, "g": g } );
	}
	
	// power rule
	if (operator === '^') {
	    var base = operands[0];
	    var exponent = operands[1];
	    
	    if (typeof exponent === 'number') {
		var a = derivative_of_ast(base,x);

		if (exponent === '1')
		    return a;

		var power_rule = mathFunctionParser.parse('n * (f^(n-1)) * a');
		return substitute_ast( power_rule, { "n": exponent, "f": base, "a" : a } );
	    }
	    
	    if (base === 'e') {
		var power_rule = mathFunctionParser.parse('e^(f)*d');
		var d = derivative_of_ast(exponent,x);
		return substitute_ast( power_rule, { "f": exponent, "d": d } );
	    }
	    
	    if (typeof base === 'number') {
		var power_rule = mathFunctionParser.parse('a^(b)*log(a)*d');
		var d = derivative_of_ast(exponent,x);
		return substitute_ast( power_rule, { "a": base, "b": exponent, "d": d } );
	    }
	    
	    // general case of a function raised to a function
	    var f = base;
	    var g = exponent;
	    var a = derivative_of_ast(f,x);
	    var b = derivative_of_ast(g,x);
	    
	    var power_rule = mathFunctionParser.parse('(f^g)*(b * log(f) + (g * a)/f)');
	    return substitute_ast( power_rule, { "a": a, "b": b, "f": f, "g": g } );
	}
	
	// chain rule
	if (operator in derivatives) {
	    input = operands[0];
	    
	    return ['*',
		    substitute_ast( derivatives[operator], { "x": input } ),
		    derivative_of_ast( input, x )];
	}
	
	return 0;
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
	    return new StraightLineProgram(derivative_of_ast( this.syntax_tree, x ));
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
