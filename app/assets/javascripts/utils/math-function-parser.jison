
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"e"                   return 'E'
[A-Za-z]\b            return 'VAR'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"("                   return '('
")"                   return ')'
"pi"                  return 'PI'
"sin"                 return 'SIN'
"cos"                 return 'COS'
"tan"                 return 'TAN'
"arcsin"              return 'ARCSIN'
"arccos"              return 'ARCCOS'
"arctan"              return 'ARCTAN'
"log"                 return 'LOG'
"exp"                 return 'EXP'
"sqrt"                return 'SQRT'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS
%left FUNCTION_APPLICATION

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

e
    : e '+' e
        {$$ = new StraightLineProgram(function(bindings){ return $1.f(bindings) + $3.f(bindings); },
				      '\\left(' + $1.tex + ' + ' + $3.tex + '\\right)' );}
    | e '-' e
        {$$ = new StraightLineProgram(function(bindings){ return $1.f(bindings) - $3.f(bindings); },
				      '\\left(' + $1.tex + ' - ' + $3.tex + '\\right)' );}
    | e '*' e
        {$$ = new StraightLineProgram(function(bindings){ return $1.f(bindings) * $3.f(bindings); },
				      '\\left(' + $1.tex + ' \\cdot ' + $3.tex + '\\right)' );}
    | e '/' e
        {$$ = new StraightLineProgram(function(bindings){ return $1.f(bindings) / $3.f(bindings); },
				      '\\displaystyle\\frac{' + $1.tex + '}{' + $3.tex + '}' );}
    | e '^' e
        {$$ = new StraightLineProgram(function(bindings){ return Math.pow($1.f(bindings),$3.f(bindings)); },
				      '\\left(' + $1.tex + '\\right)^{' + $3.tex + '}' );}
    | '-' e %prec UMINUS
        {$$ = new StraightLineProgram(function(bindings){ return -($2.f(bindings)); },
				      '-\\left(' + $2.tex + '\\right)' );}
    | '(' e ')'
        {$$ = $2;}
    | EXP e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.exp($2.f(bindings)); },
				      'e^{' + $2.tex + '}' );}
    | LOG e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.log($2.f(bindings)); },
				      '\\log \\left(' + $2.tex + '\\right)' );}
    | SIN e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.sin($2.f(bindings)); },
				      '\\sin \\left(' + $2.tex + '\\right)' );}
    | COS e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.cos($2.f(bindings)); },
				      '\\cos \\left(' + $2.tex + '\\right)' );}
    | TAN e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.tan($2.f(bindings)); },
				      '\\tan \\left(' + $2.tex + '\\right)' );}
    | ARCSIN e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.arcsin($2.f(bindings)); },
				      '\\arcsin \\left(' + $2.tex + '\\right)' );}
    | ARCCOS e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.arccos($2.f(bindings)); },
				      '\\arccos \\left(' + $2.tex + '\\right)' );}
    | ARCTAN e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.arctan($2.f(bindings)); },
				      '\\arctan \\left(' + $2.tex + '\\right)' );}
    | SQRT e %prec FUNCTION_APPLICATION
        {$$ = new StraightLineProgram(function(bindings){ return Math.pow($2.f(bindings),0.5); },
				      '\\sqrt{' + $2.tex + '}' );}
    | NUMBER
        {$$ = new StraightLineProgram(function(bindings){ return parseFloat(yytext); },
				      parseFloat(yytext).toString());}
    | E
        {$$ = new StraightLineProgram(function(bindings){ return Math.E; },
				      'e');}
    | PI
        {$$ = new StraightLineProgram(function(bindings){ return Math.PI; },
				      '\\pi');}
    | VAR
        {$$ = new StraightLineProgram(function(bindings){ return bindings[yytext]; },
				      yytext);}
    ;

%%

function StraightLineProgram(f,tex)
{
    this.f = f;
    this.tex = tex;
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
    equals: function(other) {
	var total_trials = 20;
	var epsilon = 0.0001;
	var successful_trials = 0;

        for( var i=0; i < total_trials; i++ ) {
	    bindings = randomBindings();
	    if (Math.abs(this.f(bindings) - other.f(bindings)) < epsilon) {
		successful_trials++;
	    }
	}
	return (successful_trials > 0.95 * total_trials);
    },

    equalsForBinding: function(other,bindings) {
	var epsilon = 0.0001;

	return (Math.abs(this.f(bindings) - other.f(bindings)) < epsilon);
    }
}
