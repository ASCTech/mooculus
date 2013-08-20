/* recursive descent parser for math expressions */

/* Grammar: 

   expression =
    expression '+' term | 
    expression '-' term |
    term

   term =
    term '*' factor |
    term nonMinusFactor |
    term '/' factor |
    \frac{expression}{expression} |
    factor

   nonMinusFactor =
    '(' expression ')' |
    number | 
    variable |
    function factor |
    function '(' expression ')' |
    function '^' factor factor |
    nonMinusFactor '^' factor

   factor = 
    '-' factor |
    nonMinusFactor
*/
var latexToAst = (function(){
    /****************************************************************/
    /* setup the lexer */
    latexLexer.parse('');
    var lexer = latexLexer.parser.yy.lexer;

    var symbol = '';
    
    function advance() {
	symbol = lexer.lex();
	console.log( symbol );

	if (symbol == 4)
	    symbol = 'EOF';
	
	return symbol;
    }
    
    function yytext() {
	return lexer.yytext;
    }
    
    function parse(input) {
	lexer.setInput(input);
	advance();
	
	return expression();
    }

    
    /****************************************************************/
    /* grammar */
    
    function expression() {
	console.log( "in expression" );
	var lhs = term();
	
	while ((symbol == '+') || (symbol == '-')) {
	    var operation = false;
	    
	    if (symbol == '+')
		operation = '+';
	    
	    if (symbol == '-')
		operation = '-';
	    
	    advance();
	    
	    var rhs = term();
	    
	    lhs = [operation, lhs, rhs];
	}
	
	return lhs;
    }

    function isFunctionSymbol( symbol )
    {
	var functionSymbols = ['SIN', 'COS', 'TAN', 'CSC', 'SEC', 'COT', 'ARCSIN', 'ARCCOS', 'ARCTAN', 'ARCSIN', 'ARCCOS', 'ARCTAN', 'LOG', 'LOG', 'EXP', 'SQRT', 'ABS'];
	return (functionSymbols.indexOf(symbol) != -1);
    }    

    function term() {
	console.log( "in term" );

	var lhs = factor();

	var keepGoing = false;
	
	do {
	    keepGoing = false;
	    
	    if (symbol == '*') {
		advance();
		lhs = ['*', lhs, factor()];
		keepGoing = true;
	    } else if (symbol == '/') {
		advance();
		lhs = ['/', lhs, factor()];
		keepGoing = true;
	    } else {
		rhs = nonMinusFactor();
		if (rhs != false) {
		    lhs = ['*', lhs, rhs];
		    keepGoing = true;
		}
	    }
	} while( keepGoing );
	
	return lhs;
    }
    
    function factor() {
	if (symbol == '-') {
	    advance();
	    return ['~', factor()];
	}
	
	return nonMinusFactor();
    }
    
    function nonMinusFactor() {
	var result = false;

	if (symbol == 'FRAC') {
	    advance();
	    var numerator = factor();
	    var denominator = factor();

	    return ['/', numerator, denominator];
	} else if (symbol == 'NUMBER') {
	    result = parseFloat( yytext() );
	    advance();
	} else if (symbol == 'VAR') {
	    result = yytext();
	    advance();
	} else if (symbol == 'PI') {
	    result = "pi"
	    advance();
	} else if (isFunctionSymbol(symbol)) {
	    var functionName = symbol.toLowerCase();
	    advance();

	    if (symbol == '(') {
		advance();
		var parameter = expression();
		if (symbol != ')') {
		    throw 'Expected )';	    
		}
		advance();

		result = [functionName, parameter];
	    } else if (symbol == '{') {
		advance();
		var parameter = expression();
		if (symbol != '}') {
		    throw 'Expected )';	    
		}
		advance();

		result = [functionName, parameter];
	    } else if (symbol == '^') {
		advance();
		var power = factor();
		var parameter = factor();
		result = ['^', [functionName, parameter], power];
	    } else {
		result = [functionName, factor()];
	    }
	} else if (symbol == '(') {
	    advance();
	    var result = expression();
	    if (symbol != ')') {
		throw 'Expected )';	    
	    }
	    advance();
	} else if (symbol == '{') {
	    advance();
	    var result = expression();
	    if (symbol != '}') {
		throw 'Expected )';	    
	    }
	    advance();
	}
	
	if (symbol == '^') {
	    advance();
	    return ['^', result, factor()];
	}
	
	return result;
    }

    //module.exports = parse;
    return parse;
})();
