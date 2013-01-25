
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+([,.][0-9]+)?     return 'NUMBER'
"e"                     return 'E'
[A-Za-z]\b              return 'VAR'
"*"                     return '*'
"/"                     return '/'
"-"                     return '-'
"+"                     return '+'
"^"                     return '^'
"("                     return '('
")"                     return ')'
"pi"                    return 'PI'
"sin"                   return 'SIN'
"cos"                   return 'COS'
"tan"                   return 'TAN'
"csc"                   return 'CSC'
"sec"                   return 'SEC'
"cot"                   return 'COT'
"arcsin"                return 'ARCSIN'
"arccos"                return 'ARCCOS'
"arctan"                return 'ARCTAN'
"log"                   return 'LOG'
"ln"                    return 'LOG'
"exp"                   return 'EXP'
"sqrt"                  return 'SQRT'
<<EOF>>                 return 'EOF'
.                       return 'INVALID'

/lex

/* operator associations and precedence */


%left '+' '-'
%left UMINUS
%left '*' '/'
%right '^'
%left FUNCTION_APPLICATION

%start expressions

%% /* language grammar */

//        { typeof console !== 'undefined' ? console.log($1) : print($1);
//          return $1; }


expressions
    : e EOF
      { return $1; }
    ;

number
    : NUMBER
        {$$ = new StraightLineProgram(function(bindings){ return parseFloat(yytext.replace(',','.')); },
				      parseFloat(yytext.replace(',','.')).toString(),
				      parseFloat(yytext.replace(',','.')).toString());}
    ;

variable
    : VAR
        {$$ = new StraightLineProgram(function(bindings){ return bindings[yytext.toLowerCase()]; },
				      yytext.toLowerCase(),
				      yytext.toLowerCase());}
    ;

e
    : e '+' e
        {$$ = new StraightLineProgram(function(bindings){ return $1.evaluate(bindings) + $3.evaluate(bindings); },
				      '\\left(' + $1.tex + ' + ' + $3.tex + '\\right)',
				      ['+', $1.syntax_tree, $3.syntax_tree] );}
    | e '-' e
        {$$ = new StraightLineProgram(function(bindings){ return $1.evaluate(bindings) - $3.evaluate(bindings); },
				      '\\left(' + $1.tex + ' - ' + $3.tex + '\\right)',
				      ['-', $1.syntax_tree, $3.syntax_tree] );}
    | e '*' e
        {$$ = new StraightLineProgram(function(bindings){ return $1.evaluate(bindings) * $3.evaluate(bindings); },
				      '\\left(' + $1.tex + ' \\cdot ' + $3.tex + '\\right)',
				      ['*', $1.syntax_tree, $3.syntax_tree] );}
    | number variable '^' e
        {$$ = new StraightLineProgram(function(bindings){ return Math.pow($1.evaluate(bindings) * $2.evaluate(bindings),$4.evaluate(bindings)); },
	  			      '\\left(' + $1.tex + ' \\cdot \\left(' + $2.tex + '\\right)^{' + $4.tex + '}\\right)',
				      ['*', $1.syntax_tree, ['^', $2.syntax_tree, $4.syntax_tree]] );}
    | variable
        {$$ = $1}
    | number variable %prec '*'
        {$$ = new StraightLineProgram(function(bindings){ return $1.evaluate(bindings) * $2.evaluate(bindings); },
				      '\\left(' + $1.tex + ' \\cdot ' + $2.tex + '\\right)',
				      ['*', $1.syntax_tree, $2.syntax_tree] );}
    | e '/' e
        {$$ = new StraightLineProgram(function(bindings){ return $1.evaluate(bindings) / $3.evaluate(bindings); },
				      '\\displaystyle\\frac{' + $1.tex + '}{' + $3.tex + '}',
				      ['/', $1.syntax_tree, $3.syntax_tree] );}
    | e '^' e
        {$$ = new StraightLineProgram(function(bindings){ return Math.pow($1.evaluate(bindings),$3.evaluate(bindings)); },
				      '\\left(' + $1.tex + '\\right)^{' + $3.tex + '}',
				      ['^', $1.syntax_tree, $3.syntax_tree] );}
    | '-' e %prec UMINUS
        {$$ = new StraightLineProgram(function(bindings){ return -($2.evaluate(bindings)); },
				      '-\\left(' + $2.tex + '\\right)',
				      ['*', -1, $2.syntax_tree] );}
    | '+' e %prec UMINUS
        {$$ = $2;}
    | '(' e ')'
        {$$ = $2;}
    | EXP e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.pow(Math.E,$2.evaluate(bindings)); },
				      'e^{' + $2.tex + '}',
				      ['^', 'e', $2.syntax_tree] );}
    | LOG e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.log($2.evaluate(bindings)); },
				      '\\log \\left(' + $2.tex + '\\right)',
				      ['log', $2.syntax_tree] );}
    | SIN e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.sin($2.evaluate(bindings)); },
				      '\\sin \\left(' + $2.tex + '\\right)',
				      ['sin', $2.syntax_tree] );}
    | COS e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.cos($2.evaluate(bindings)); },
				      '\\cos \\left(' + $2.tex + '\\right)',
				      ['cos', $2.syntax_tree] );}
    | TAN e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.tan($2.evaluate(bindings)); },
				      '\\tan \\left(' + $2.tex + '\\right)',
				      ['tan', $2.syntax_tree] );}

    | CSC e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return 1.0/Math.sin($2.evaluate(bindings)); },
				      '\\csc \\left(' + $2.tex + '\\right)',
				      ['csc', $2.syntax_tree] );}
    | SEC e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return 1.0/Math.cos($2.evaluate(bindings)); },
				      '\\sec \\left(' + $2.tex + '\\right)',
				      ['sec', $2.syntax_tree] );}
    | COT e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return 1.0/Math.tan($2.evaluate(bindings)); },
				      '\\cot \\left(' + $2.tex + '\\right)',
				      ['cot', $2.syntax_tree] );}

    | ARCSIN e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.arcsin($2.evaluate(bindings)); },
				      '\\arcsin \\left(' + $2.tex + '\\right)',
				      ['arcsin', $2.syntax_tree] );}
    | ARCCOS e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.arccos($2.evaluate(bindings)); },
				      '\\arccos \\left(' + $2.tex + '\\right)',
				      ['arccos', $2.syntax_tree] );}
    | ARCTAN e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.arctan($2.evaluate(bindings)); },
				      '\\arctan \\left(' + $2.tex + '\\right)',
				      ['arctan', $2.syntax_tree] );}
    | SQRT e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.pow($2.evaluate(bindings),0.5); },
				      '\\sqrt{' + $2.tex + '}',
				      ['sqrt', $2.syntax_tree] );}
    | E
        {$$ = new StraightLineProgram(function(bindings){ return Math.E; },
				      'e', "e");}
    | PI
        {$$ = new StraightLineProgram(function(bindings){ return Math.PI; },
				      '\\pi', "pi");}
    | number
        {$$ = $1;}
    ;

%%

function StraightLineProgram(f,tex,tree)
{
    this.evaluate = f;
    this.tex = tex;
    this.syntax_tree = tree;
}

var sub = function(str) {
  return str.replace(/#\{(.*?)\}/g,
    function(whole, expr) {
      return eval(expr)
    })
}

var randomBindings = function() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var result = new Object();
    for(var i=0; i<alphabet.length; i++) {
	result[alphabet.charAt(i)] = Math.random() * 20.0 - 10.0;
    }
    return result;
}

StraightLineProgram.prototype = {
    f: function(bindings) {
	this.evaluate(bindings)
    },

    equalsForBinding: function(other,bindings) {
	var epsilon = 0.0001;
	var this_evaluated = this.evaluate(bindings);	
	var other_evaluated = other.evaluate(bindings);
	return (Math.abs(this_evaluated - other_evaluated) < epsilon) ||
	    (this_evaluated == other_evaluated) ||
	    (isNaN(this_evaluated) && isNaN(other_evaluated));
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
}

