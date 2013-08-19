var MathFunction = (function() {
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
	
	var result = [operator].concat( _.map( operands, function(v,i) { return substitute_ast(v,bindings); } ) );
	return result;
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

		_.each( needle_operands, function(i) {
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
	    return substitute_ast( replacement, match ).concat( match.remainder );
	}

	var operator = haystack[0];
	var operands = haystack.slice(1);

	return [operator].concat( _.map( operands, function(v,i) { return replace_subtree(v, needle, replacement); } ) );
    };

    function associate_ast( tree, op ) {
	if (typeof tree === 'number') {
	    return tree;
	}    
	
	if (typeof tree === 'string') {
	    return tree;
	}    

	var operator = tree[0];
	var operands = tree.slice(1);
	operands = _.map( operands, function(v,i) { 
	    return associate_ast(v, op); } );

	if (operator == op) {
	    var result = [];
	    
	    for( var i=0; i<operands.length; i++ ) {
		if ((typeof operands[i] !== 'number') && (typeof operands[i] !== 'string') && (operands[i][0] === op)) {
		    result = result.concat( operands[i].slice(1) );
		} else {
		    result.push( operands[i] );
		}
	    }

	    operands = result;
	}

	return [operator].concat( operands );
    }

    function remove_identity( tree, op, identity ) {
	if (typeof tree === 'number') {
	    return tree;
	}    
	
	if (typeof tree === 'string') {
	    return tree;
	}    

	var operator = tree[0];
	var operands = tree.slice(1);
	operands = _.map( operands, function(v,i) { return remove_identity(v, op, identity); } );

	if (operator == op) {
	    operands = _.filter(operands, function (a) { return a != identity; });
	    if (operands.length == 0)
		operands = [identity];

	    if (operands.length == 1)
		return operands[0];
	}

	return [operator].concat( operands );
    }

    function remove_zeroes( tree ) {
	if (typeof tree === 'number') {
	    return tree;
	}    
	
	if (typeof tree === 'string') {
	    return tree;
	}    

	var operator = tree[0];
	var operands = tree.slice(1);
	operands = _.map( operands, function(v,i) { return remove_zeroes(v); } );

	if (operator === "*") {
	    for( var i=0; i<operands.length; i++ ) {
		if (operands[i] === 0)
		    return 0;
	    }
	}

	return [operator].concat( operands );
    }

    function collapse_unary_minus( tree ) {
	if (typeof tree === 'number') {
	    return tree;
	}    
	
	if (typeof tree === 'string') {
	    return tree;
	}    

	var operator = tree[0];
	var operands = tree.slice(1);
	operands = _.map( operands, function(v,i) { return collapse_unary_minus(v); } );

	if (operator == "~") {
	    if (typeof operands[0] === 'number')
		return -operands[0];
	}

	return [operator].concat( operands );
    }

    function clean_ast( tree ) {
	tree = associate_ast( tree, '+' );
	tree = associate_ast( tree, '-' );
	tree = associate_ast( tree, '*' );
	tree = remove_identity( tree, '*', 1 );
	tree = collapse_unary_minus( tree );
	tree = remove_zeroes( tree );
	tree = remove_identity( tree, '+', 0 );
	
	return tree;
    };

    /****************************************************************/
    // complex number evaluation code for our AST's

    var complex_math_functions = {
	"+": function(operands) { var result = new ComplexNumber(0,0); _.each(operands,function(v,i) { result = result.sum( v ); }); return result; },
	"-": function(operands) { var result = operands[0]; _.each(operands.slice(1),function(v,i) { result = result.subtract( v ); }); return result; },
	"~": function(operands) { var result = new ComplexNumber(0,0); _.each(operands,function(v,i) { result = result.subtract( v ); }); return result; },
	"*": function(operands) { var result = operands[0]; _.each(operands.slice(1),function(v,i) { result = result.multiply( v ); }); return result; },
	"/": function(operands) { var result = operands[0]; _.each(operands.slice(1),function(v,i) { result = result.divide( v ); }); return result; },

	"sin": function(operands) { return operands[0].sin(); },
	"cos": function(operands) { return operands[0].cos(); },
	"tan": function(operands) { return operands[0].tan(); },
	"arcsin": function(operands) { return operands[0].arcsin(); },
	"arccos": function(operands) { return operands[0].arccos(); },
	"arctan": function(operands) { return operands[0].arctan(); },
	"arccsc": function(operands) { return operands[0].reciprocal().arcsin(); },
	"arcsec": function(operands) { return operands[0].reciprocal().arccos(); },
	"arccot": function(operands) { return operands[0].reciprocal().arctan(); },

	"csc": function(operands) { return operands[0].csc(); },
	"sec": function(operands) { return operands[0].sec(); },
	"cot": function(operands) { return operands[0].cot(); },

	"sqrt": function(operands) { return operands[0].power( new ComplexNumber(0.5,0) ); },
	"log": function(operands) { return operands[0].log(); },
	"^": function(operands) { return operands[0].power(operands[1]); },
	"abs": function(operands) { return new ComplexNumber( operands[0].modulus(), 0 ); },
	"apply": function(operands) { return NaN; },
    };

    function complex_evaluate_ast(tree, bindings) {
	if (typeof tree === 'string') {
	    if (tree === "e")
		return new ComplexNumber( Math.E, 0 );

	    if (tree === "pi")
		return new ComplexNumber( Math.PI, 0 );

	    if (tree === "i")
		return new ComplexNumber( 0, 1 );

	    if (tree in bindings)
		return bindings[tree];
	    
	    return tree;
	}    

	if (typeof tree === 'number') {
	    return new ComplexNumber( tree, 0 );
	}

	if (("real" in tree) && ("imaginary" in tree))
	    return tree;
	
	var operator = tree[0];
	var operands = tree.slice(1);

	if (operator in math_functions) {
	    return complex_math_functions[operator]( _.map( operands, function(v,i) { return complex_evaluate_ast(v,bindings); } ) );
	}
	
	return new ComplexNumber( NaN,NaN );
    };

    /****************************************************************/
    // evaluation code for our AST's

    var math_functions = {
	"+": function(operands) { var result = 0; _.each(operands,function() { result += this; }); return result; },
	"-": function(operands) { var result = operands[0]; _.each(operands.slice(1),function() { result -= this; }); return result; },
	"*": function(operands) { var result = operands[0]; _.each(operands.slice(1),function() { result *= this; }); return result; },
	"/": function(operands) { var result = operands[0]; _.each(operands.slice(1),function() { result /= this; }); return result; },
	"~": function(operands) { var result = 0; _.each(operands,function() { result -= this; }); return result; },
	"sin": function(operands) { return Math.sin(operands[0]); },
	"cos": function(operands) { return Math.cos(operands[0]); },
	"tan": function(operands) { return Math.tan(operands[0]); },
	"arcsin": function(operands) { return Math.asin(operands[0]); },
	"arccos": function(operands) { return Math.acos(operands[0]); },
	"arctan": function(operands) { return Math.atan(operands[0]); },
	"arccsc": function(operands) { return Math.asin(1.0/operands[0]); },
	"arcsec": function(operands) { return Math.acos(1.0/operands[0]); },
	"arccot": function(operands) { return Math.atan(1.0/operands[0]); },
	"csc": function(operands) { return 1.0/Math.sin(operands[0]); },
	"sec": function(operands) { return 1.0/Math.cos(operands[0]); },
	"cot": function(operands) { return 1.0/Math.tan(operands[0]); },
	"sqrt": function(operands) { return Math.sqrt(operands[0]); },
	"log": function(operands) { return Math.log(operands[0]); },
	"^": function(operands) { return Math.pow(operands[0], operands[1]); },
	"abs": function(operands) { return Math.abs(operands[0]); },
	"apply": function(operands) { return NaN; },
    };

    function evaluate_ast(tree, bindings) {
	if (typeof tree === 'number') {
	    return tree;
	}

	if (typeof tree === 'string') {
	    if (tree === "e")
		return Math.E;

	    if (tree === "pi")
		return Math.PI;

	    if (tree in bindings)
		return bindings[tree];
	    
	    return tree;
	}    
	
	var operator = tree[0];
	var operands = tree.slice(1);

	if (operator in math_functions) {
	    return math_functions[operator]( _.map( operands, function(v,i) { return evaluate_ast(v,bindings); } ) );
	}
	
	return NaN;
    };

    function leaves( tree ) {
	if (typeof tree === 'number') {
	    return [tree];
	}

	if (typeof tree === 'string') {
	    return [tree];
	}    

	var operator = tree[0];
	var operands = tree.slice(1);

	return _.flatten( _.map( operands, function(v,i) { return leaves(v); } ) );
    }

    function variables_in_ast( tree ) {
	var result = leaves( tree );

	result = _.filter( result, function(v,i) {
	    return (typeof v === 'string') && (v != "e") && (v != "pi")
	});

	result = result.filter(function(itm,i,a){
	    return i==result.indexOf(itm);
	});
	    
	return result;
    }


    /****************************************************************/
    // convert an AST to a LaTeX expression

    var latex_functions = {
	"+": function(operands) { return "\\left(" + operands.join( ' + ' ) + "\\right)"; },
	"-": function(operands) { return "\\left(" + operands.join( ' - ' ) + "\\right)"; },
	"~": function(operands) { return "-\\left( " + operands.join( ' + ' ) + "\\right)"; },
	"*": function(operands) { return "\\left(" + operands.join( " \\cdot " ) + "\\right)"; },
	"/": function(operands) { return "\\frac{" + operands[0] + "}{" + operands[1] + "}"; },
	"^": function(operands) { return operands[0] + "^{" + operands[1] + "}"; },
	"sin": function(operands) { return "\\sin \\left(" + operands[0] + "\\right)"; },
	"cos": function(operands) { return "\\cos \\left(" + operands[0] + "\\right)"; },
	"tan": function(operands) { return "\\tan \\left(" + operands[0] + "\\right)"; },
	"arcsin": function(operands) { return "\\arcsin \\left(" + operands[0] + "\\right)"; },
	"arccos": function(operands) { return "\\arccos \\left(" + operands[0] + "\\right)"; },
	"arctan": function(operands) { return "\\arctan \\left(" + operands[0] + "\\right)"; },
	"arccsc": function(operands) { return "\\mbox{arccsc} \\left(" + operands[0] + "\\right)"; },
	"arcsec": function(operands) { return "\\mbox{arcsec} \\left(" + operands[0] + "\\right)"; },
	"arccot": function(operands) { return "\\mbox{arccot} \\left(" + operands[0] + "\\right)"; },
	"csc": function(operands) { return "\\csc \\left(" + operands[0] + "\\right)"; },
	"sec": function(operands) { return "\\sec \\left(" + operands[0] + "\\right)"; },
	"cot": function(operands) { return "\\cot \\left(" + operands[0] + "\\right)"; },
	"log": function(operands) { return "\\log \\left(" + operands[0] + "\\right)"; },
	"sqrt": function(operands) { return "\\sqrt{" + operands[0] + "}"; },
	"abs":  function(operands) { return "\\left|" + operands[0] + "\\right|"; },
	"apply": function(operands) { return operands[0] + " \\left(" + operands[1] + "\\right)"; },
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

	// Exponentiating a fraction should include some parentheses
	if (operator === "^") {
	    if (operands[0][0] === "/") {
		return "\\left(" + latex_ast(operands[0]) + "\\right)^{" + latex_ast(operands[1]) + "}";
	    }
	}

	// Display trig functions in a more reasonable format
	if (operator === "^") {
	    if (operands[0][0] === "sin")
		return "\\sin^{" + latex_ast(operands[1]) + "}" + "\\left(" + latex_ast(operands[0][1]) + "\\right)";
	    if (operands[0][0] === "cos")
		return "\\cos^{" + latex_ast(operands[1]) + "}" + "\\left(" + latex_ast(operands[0][1]) + "\\right)";
	    if (operands[0][0] === "tan")
		return "\\tan^{" + latex_ast(operands[1]) + "}" + "\\left(" + latex_ast(operands[0][1]) + "\\right)";
	    if (operands[0][0] === "sec")
		return "\\sec^{" + latex_ast(operands[1]) + "}" + "\\left(" + latex_ast(operands[0][1]) + "\\right)";
	    if (operands[0][0] === "csc")
		return "\\csc^{" + latex_ast(operands[1]) + "}" + "\\left(" + latex_ast(operands[0][1]) + "\\right)";
	    if (operands[0][0] === "cot")
		return "\\cot^{" + latex_ast(operands[1]) + "}" + "\\left(" + latex_ast(operands[0][1]) + "\\right)";
	}

	if (operator in math_functions) {
	    return "{" + latex_functions[operator]( _.map( operands, function(v,i) { return latex_ast(v); } ) ) + "}";
	}

	return NaN;
    };

    /****************************************************************/
    // differentiate an AST

    var derivatives = {
	"sin": textToAst('cos x'),
	"cos": textToAst('-(sin x)'),
	"tan": textToAst('(sec x)^2'),
	"cot": textToAst('-((csc x)^2)'),
	"sec": textToAst('(sec x)*(tan x)'),
	"csc": textToAst('-(csc x)*(cot x)'),
	"sqrt": textToAst('1/(2*sqrt(x))'),
	"log": textToAst('1/x'),
	"arcsin": textToAst('1/sqrt(1 - x^2)'),
	"arccos": textToAst('-1/sqrt(1 - x^2)'),
	"arctan": textToAst('1/(1 + x^2)'),
	"arccsc": textToAst('-1/(sqrt(-1/x^2 + 1)*x^2)'),
	"arcsec": textToAst('1/(sqrt(-1/x^2 + 1)*x^2)'),
	"arccot": textToAst('-1/(1 + x^2)'),
	"abs": textToAst('abs(x)/x'),
    };
    
    function derivative_of_ast(tree,x,story) {
	var ddx = '\\frac{d}{d' + x + '} ';

	// Derivative of a constant
	if (typeof tree === 'number') {
	    story.push( 'The derivative of a constant is zero, that is, <code>' + ddx + latex_ast(tree) + ' = 0</code>.' );
	    return 0;
	}

	// Derivative of a more complicated constant 
	if ((variables_in_ast(tree)).indexOf(x) < 0) {
	    story.push( 'The derivative of a constant is zero, that is, <code>' + ddx + latex_ast(tree) + ' = 0</code>.' );
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
	    story.push( 'Using the sum rule, <code>' + ddx + latex_ast( tree ) + ' = ' + (_.map( operands, function(v,i) { return ddx + latex_ast(v); } )).join( ' + ' ) + '</code>.' );
	    var result = [operator].concat( _.map( operands, function(v,i) { return derivative_of_ast(v,x,story); } ) );
	    result = clean_ast(result);
	    story.push( 'So using the sum rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
	    return result;
	}
	
	// product rule
	if (operator === '*') {
	    var non_numeric_operands = [];
	    var numeric_operands = [];

	    for( var i=0; i<operands.length; i++ ) {
		if ((typeof operands[i] === 'number') || ((variables_in_ast(operands[i])).indexOf(x) < 0)) {
		    any_numbers = true;
		    numeric_operands.push( operands[i] );
		} else {
		    non_numeric_operands.push( operands[i] );
		} 
	    }

	    if (numeric_operands.length > 0) {
		if (non_numeric_operands.length == 0) {
		    story.push( 'Since the derivative of a constant is zero, <code>' + ddx + latex_ast( tree ) + ' = 0.</code>' );
		    var result = 0;
		    return result;
		}

		var remaining = ['*'].concat( non_numeric_operands );
		if (non_numeric_operands.length == 1) 
		    remaining = non_numeric_operands[0];



		if (remaining === x) {
		    story.push( 'By the constant multiple rule, <code>' + ddx + latex_ast( tree ) + ' = ' + (_.map( numeric_operands, function(v,i) { return latex_ast(v); } )).join( ' \\cdot ' ) + '</code>.' );
		    var result = ['*'].concat( numeric_operands );
		    result = clean_ast(result);
		    return result;
		}

		story.push( 'By the constant multiple rule, <code>' + ddx + latex_ast( tree ) + ' = ' + (_.map( numeric_operands, function(v,i) { return latex_ast(v); } )).join( ' \\cdot ' ) + ' \\cdot ' + ddx + '\\left(' + latex_ast(remaining) + '\\right)</code>.' );

		var d = derivative_of_ast(remaining,x,story);
		var result = ['*'].concat( numeric_operands.concat( [d] ) );
		result = clean_ast(result);
		story.push( 'And so <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    }

	    story.push( 'Using the product rule, <code>' + ddx + latex_ast( tree ) + ' = ' +
			(_.map( operands, function(v,i) {
			    return (_.map( operands, function(w,j) {
				if (i == j)
				    return ddx + '\\left(' + latex_ast(v) + '\\right)';
				else
				    return latex_ast(w);
			    })).join( ' \\cdot ' ) })).join( ' + ' ) + '</code>.' );

	    var inner_operands = operands.slice();

	    var result = ['+'].concat( _.map( operands, function(v,i) {
		return ['*'].concat( _.filter( _.map( inner_operands, function(w,j) {
		    if (i == j) {
			var d = derivative_of_ast(w,x,story);
			// remove terms that have derivative 1
			if (d === 1)
			    return null;

			return d;
		    } else {
			return w;
		    }
		} ), function(t) { return t != null; } ) );
	    } ) );
	    result = clean_ast(result);
	    story.push( 'So using the product rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );

	    return result;
	}
	
	// quotient rule
	if (operator === '/') {
	    var f = operands[0];
	    var g = operands[1];

	    if ((variables_in_ast(g)).indexOf(x) < 0) {
		story.push( 'By the constant multiple rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(['/', 1, g]) + ' \\cdot ' + ddx + '\\left(' + latex_ast(f) + '\\right)</code>.' );

		var df = derivative_of_ast(f,x,story);		
		var quotient_rule = textToAst('(1/g)*d');
		var result = substitute_ast( quotient_rule, { "d": df, "g": g } );
		result = clean_ast(result);
		story.push( 'So <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		
		return result;		
	    }

	    if ((variables_in_ast(f)).indexOf(x) < 0) {
		if (f !== 1) {
		    story.push( 'By the constant multiple rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(f) + ' \\cdot ' + ddx + '\\left(' + latex_ast(['/',1,g]) + '\\right)</code>.' );
		}

		story.push( 'Since <code>\\frac{d}{du} \\frac{1}{u}</code> is <code>\\frac{-1}{u^2}</code>, the chain rule gives <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(f) + '\\cdot \\frac{-1}{ ' + latex_ast(g) + '^2' + '} \\cdot ' + ddx + latex_ast( g ) + "</code>." );

		var a = derivative_of_ast(g,x,story);

		var quotient_rule = textToAst('f * (-a/(g^2))');
		var result = substitute_ast( quotient_rule, { "f": f, "a": a, "g": g } );
		result = clean_ast(result);
		story.push( 'So since <code>\\frac{d}{du} \\frac{1}{u}</code> is <code>\\frac{-1}{u^2}</code>, the chain rule gives <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );

		return result;
	    }

	    story.push( 'Using the quotient rule, <code>' + ddx + latex_ast( tree ) + ' = \\frac{' + ddx + '\\left(' + latex_ast(f) + '\\right) \\cdot ' + latex_ast(g) + ' - ' + latex_ast(f) + '\\cdot ' + ddx + '\\left(' + latex_ast(g) + '\\right)}{ \\left( ' + latex_ast(g) + ' \\right)^2} </code>.' );

	    var a = derivative_of_ast(f,x,story);
	    var b = derivative_of_ast(g,x,story);
	    var f_prime = a;
	    var g_prime = b;

	    var quotient_rule = textToAst('(a * g - f * b)/(g^2)');

	    var result = substitute_ast( quotient_rule, { "a": a, "b": b, "f": f, "g": g } );
	    result = clean_ast(result);
	    story.push( 'So using the quotient rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );

	    return result;
	}
	
	// power rule
	if (operator === '^') {
	    var base = operands[0];
	    var exponent = operands[1];
	    
	    if ((variables_in_ast(exponent)).indexOf(x) < 0) {
		if ((typeof base === 'string') && (base === 'x')) {
		    if (typeof exponent === 'number') {
			var power_rule = textToAst('n * (f^m)');
			var result = substitute_ast( power_rule, { "n": exponent, "m": exponent - 1, "f": base } );
			result = clean_ast(result);
			story.push( 'By the power rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( exponent ) + ' \\cdot \\left(' + latex_ast( base ) + '\\right)^{' + latex_ast( ['-', exponent, 1] ) + '}</code>.' );
			return result;
		    }

		    var power_rule = textToAst('n * (f^(n-1))');
		    var result = substitute_ast( power_rule, { "n": exponent, "f": base } );
		    result = clean_ast(result);
		    story.push( 'By the power rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( exponent ) + ' \\cdot \\left(' + latex_ast( base ) + '\\right)^{' + latex_ast( ['-', exponent, 1] ) + '}</code>.' );

		    return result;
		}

		if (exponent != 1) {
		    story.push( 'By the power rule and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( exponent ) + ' \\cdot \\left(' + latex_ast( base ) + '\\right)^{' + latex_ast( ['-', exponent, 1] ) + '} \\cdot ' + ddx + latex_ast( base ) + '</code>.' );
		}

		var a = derivative_of_ast(base,x,story);

		if (exponent === 1)
		    return a;

		if (typeof exponent === 'number') {
		    var power_rule = textToAst('n * (f^m) * a');
		    var result = substitute_ast( power_rule, { "n": exponent, "m": exponent - 1, "f": base, "a" : a } );
		    result = clean_ast(result);
		    story.push( 'So by the power rule and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		    return result;
		}

		var power_rule = textToAst('n * (f^(n-1)) * a');
		var result = substitute_ast( power_rule, { "n": exponent, "f": base, "a" : a } );
		result = clean_ast(result);
		story.push( 'So by the power rule and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    }
	    
	    if (base === 'e') {
		if ((typeof exponent === 'string') && (exponent === x)) {
		    var power_rule = textToAst('e^(f)');
		    var result = substitute_ast( power_rule, { "f": exponent } );
		    result = clean_ast(result);
		    story.push( 'The derivative of <code>e^' + latex_ast( x ) + '</code> is itself, that is, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( tree ) + '</code>.' );

		    return result;
		}
		
		story.push( 'Using the rule for <code>e^x</code> and the chain rule, we know <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( tree ) + ' \\cdot ' + ddx + latex_ast( exponent ) + '</code>.' );

		var power_rule = textToAst('e^(f)*d');

		var d = derivative_of_ast(exponent,x,story);
		var result = substitute_ast( power_rule, { "f": exponent, "d": d } );
		result = clean_ast(result);
		story.push( 'So using the rule for <code>e^x</code> and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;
	    }
	    
	    if (typeof base === 'number') {
		if ((typeof exponent === 'string') && (exponent === x)) {
		    var power_rule = textToAst('a^(f) * log(a)');
		    var result = substitute_ast( power_rule, { "a": base, "f": exponent } );
		    result = clean_ast(result);
		    story.push( 'The derivative of <code>a^' + latex_ast( x ) + '</code> is <code>a^{' + latex_ast( x ) + '} \\, \\log a</code>, that is, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( result ) + '</code>.' );

		    return result;
		}

		var exp_rule = textToAst('a^(f) * log(a)');
		var partial_result = substitute_ast( exp_rule, { "a": base, "f": exponent } );

		story.push( 'Using the rule for <code>a^x</code> and the chain rule, we know <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast( partial_result ) + ' \\cdot ' + ddx + latex_ast( exponent ) + '</code>.' );

		var power_rule = textToAst('a^(b)*log(a)*d');
		var d = derivative_of_ast(exponent,x,story);
		var result = substitute_ast( power_rule, { "a": base, "b": exponent, "d": d } );
		result = clean_ast(result);
		story.push( 'So using the rule for <code>a^x</code> and the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
		return result;		
	    }
	    
	    // general case of a function raised to a function
	    var f = base;
	    var g = exponent;

	    story.push( "Recall the general rule for exponents, namely that <code>\\frac{d}{dx} u(x)^{v(x)} = u(x)^{v(x)} \\cdot \\left( v'(x) \\cdot \\log u(x) + \\frac{v(x) \\cdot u'(x)}{u(x)} \\right)</code>.  In this case, <code>u(x) = " +  latex_ast( f ) + "</code> and <code>v(x) = " + latex_ast( g ) + "</code>." );

	    var a = derivative_of_ast(f,x,story);
	    var b = derivative_of_ast(g,x,story);

	    var power_rule = textToAst('(f^g)*(b * log(f) + (g * a)/f)');
	    var result = substitute_ast( power_rule, { "a": a, "b": b, "f": f, "g": g } );
	    result = clean_ast(result);
	    story.push( 'So by the general rule for exponents, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
	    return result;
	}

	if (operator === "apply") {
	    var input = operands[1];

	    story.push( 'By the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(substitute_ast( ["apply",operands[0] + "'","x"], { "x": input } )) + " \\cdot " + ddx + latex_ast(input)  + '</code>.' );	    

	    var result = ['*',
			  substitute_ast( ["apply",operands[0] + "'","x"], { "x": input } ),
			  derivative_of_ast( input, x, story )];
	    result = clean_ast(result);		
	    story.push( 'So by the chain rule, <code>' + ddx + latex_ast( tree ) + ' = ' + latex_ast(result) + '</code>.' );
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
		result = clean_ast(result);
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
		result = clean_ast(result);		
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

   function randomComplexBindings() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var result = new Object();
	for(var i=0; i<alphabet.length; i++) {
	    result[alphabet.charAt(i)] = new ComplexNumber( Math.random() * 20.0 - 10.0,  Math.random() * 20.0 - 10.0 );
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

	complex_evaluate: function(bindings) {
	    return complex_evaluate_ast( this.syntax_tree, bindings );
	},

	substitute: function(bindings) {
	    var ast_bindings = new Object();

	    var alphabet = "abcdefghijklmnopqrstuvwxyz";
	    for(var i=0; i<alphabet.length; i++) {
		var c = alphabet.charAt(i);
		if (c in bindings)
		    ast_bindings[c] = bindings[c].syntax_tree;
	    }

	    return new StraightLineProgram( substitute_ast( this.syntax_tree, ast_bindings ) );
	},
	
	tex: function() {
	    return astToLatex( this.syntax_tree );
	},

	toString: function() {
	    return astToText( this.syntax_tree );
	},

	// numerically integrate via midpoint method with respect to 'x'
	integrate: function(x,a,b) {
	    var intervals = 100;
	    var total = 0.0;
	    var bindings = new Object();

            for( var i=0; i < intervals; i++ ) {
		var sample_point = a + ((b - a) * (i + 0.5) / intervals);
		bindings[x] = sample_point;
		total = total + this.evaluate( bindings );
	    }

	    return total * (b - a) / intervals;
	},

	// FIXME: This should be deleted
	equalsForBinding: function(other,bindings) {
	    var epsilon = 0.01;
	    var this_evaluated = this.evaluate(bindings);	
	    var other_evaluated = other.evaluate(bindings);

	    return (Math.abs(this_evaluated/other_evaluated - 1.0) < epsilon) ||
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

	variables: function() {
	    return variables_in_ast( this.syntax_tree );
	},
	
	equals: function(other) {
	    var total_trials = 300;
	    var successful_trials = 0;
	    var actual_trials = 0;
	    var epsilon = 0.01;

            for( var i=0; i < total_trials; i++ ) {
		var bindings = randomComplexBindings();

		var this_evaluated = this.complex_evaluate(bindings);	
		var other_evaluated = other.complex_evaluate(bindings);

		if (isFinite(this_evaluated.real) && isFinite(other_evaluated.real) &&
		    isFinite(this_evaluated.imaginary) && isFinite(other_evaluated.imaginary)) {
		    actual_trials++;
		    
		    if ((this_evaluated.subtract(other_evaluated).modulus()) < (epsilon * (other_evaluated.modulus()) + epsilon * epsilon))
			successful_trials++;
		    else {
			/*
			console.log( "incorrect" );
			console.log( "x = " + bindings["x"] );
			console.log( "this = " + this_evaluated );
			console.log( "other = " + other_evaluated );
			console.log( "" );
			*/
		    }
		} else {
		    /*
		    console.log( "infinite" );
		    console.log( "x = " + bindings["x"] );
		    console.log( "this = " + this_evaluated );
		    console.log( "other = " + other_evaluated );
		    console.log( "" );
		    */
		}

		if (actual_trials > 50)
		    break;
	    }

	    if (actual_trials < 10)
		return false;

	    return (successful_trials > 0.75 * actual_trials);
	},
    };

function parse (string) {
    return new StraightLineProgram( textToAst(string) );
};

function parse_tex (string) {
    // patch "2^32" to mean "2^{3}2"
    string = string.replace( /\^([0-9])/g, "^{$1}" )
    // things like \cdot2 confuses my tokenizer
    string = string.replace( /([^0-9])([0-9])/g, "$1 $2" )
    // things like \: and \, are just LaTeX spaces
    string = string.replace( /\\:/g, " " )
    string = string.replace( /\\,/g, " " )
    // mathquill inserts space after periods
    string = string.replace( /\. ([0-9])/g, ".$1" )
    string = string.replace( /, ([0-9])/g, ",$1" )
    return new StraightLineProgram( latexToAst(string) );
};

    my.parse = parse;

    my.parse_tex = parse_tex;

    //module.exports = my;
    return my;
})();
