
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+([,.][0-9]+)?     return 'NUMBER'
"e"                     return 'E'
[A-Za-z]\b              return 'VAR'
"**"                    return '^'
"*"                     return '*' // there is some variety in multiplication symbols
"\xB7"                  return '*'
"\u00B7"                return '*'
"\u2022"                return '*'
"\u22C5"                return '*'
"\u00D7"                return '*'
"/"                     return '/'
"-"                     return '-'
"\u002D"                return '-' // there is quite some variety with unicode hyphens
"\u007E"                return '-'
"\u00AD"                return '-'
"\u058A"                return '-'
"\u05BE"                return '-'
"\u1400"                return '-'
"\u1806"                return '-'
"\u2010"                return '-'
"\u2011"                return '-'
"\u2012"                return '-'
"\u2013"                return '-'
"\u2014"                return '-'
"\u2015"                return '-'
"\u207B"                return '-'
"\u208B"                return '-'
"\u2212"                return '-'
"\u2E17"                return '-'
"\u2E3A"                return '-'
"\u2E3B"                return '-'
"\u301C"                return '-'
"\u3030"                return '-'
"\u30A0"                return '-'
"\uFE31"                return '-'
"\uFE32"                return '-'
"\uFE58"                return '-'
"\uFE63"                return '-'
"\uFF0D"                return '-'
"\u002D"                return '-'
"\u007E"                return '-'
"\u00AD"                return '-'
"\u058A"                return '-'
"\u1806"                return '-'
"\u2010"                return '-'
"\u2011"                return '-'
"\u2012"                return '-'
"\u2013"                return '-'
"\u2014"                return '-'
"\u2015"                return '-'
"\u2053"                return '-'
"\u207B"                return '-'
"\u208B"                return '-'
"\u2212"                return '-'
"\u301C"                return '-'
"\u3030"                return '-'
"+"                     return '+'
"^"                     return '^' // lots of ways to denote exponentiation
"\u2038"                return '^'
"\u2041"                return '^'
"\u028C"                return '^'
"\u2227"                return '^'
"\u02C7"                return '^'
"("                     return '('
")"                     return ')'
"["                     return '('
"]"                     return ')'
"{"                     return '('
"}"                     return ')'
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
"asin"                  return 'ARCSIN'
"acos"                  return 'ARCCOS'
"atan"                  return 'ARCTAN'
"log"                   return 'LOG'
"ln"                    return 'LOG'
"exp"                   return 'EXP'
"sqrt"                  return 'SQRT'
"abs"                   return 'ABS'
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
        {$$ = parseFloat(yytext.replace(',','.'));}
    ;

variable
    : VAR
        {$$ = yytext.toLowerCase();}
    ;

e
    : e '+' e
        {$$ = ['+', $1, $3]; }
    | e '-' e
        {$$ = ['-', $1, $3]; }
    | e '*' e
        {$$ = ['*', $1, $3]; }
    | number variable '^' e
        {$$ = ['*', $1, ['^', $2, $4]]; }
    | variable
        {$$ = $1}
    | number variable %prec '*'
        {$$ = ['*', $1, $2]; }
    | e '/' e
        {$$ = ['/', $1, $3]; }
    | e '^' e
        {$$ = ['^', $1, $3]; }
    | '-' e %prec UMINUS
        {$$ = ['~', $2]; }
    | '+' e %prec UMINUS
        {$$ = $2;}
    | '(' e ')'
        {$$ = $2;}
    | EXP e %prec FUNCTION_APPLICATION
        {$$ = ['^', 'e', $2]; }
    | LOG e %prec FUNCTION_APPLICATION
        {$$ = ['log', $2]; }
    | SIN e %prec FUNCTION_APPLICATION
        {$$ = ['sin', $2]; }
    | COS e %prec FUNCTION_APPLICATION
        {$$ = ['cos', $2]; }
    | TAN e %prec FUNCTION_APPLICATION
        {$$ = ['tan', $2]; }

    | CSC e %prec FUNCTION_APPLICATION
        {$$ = ['csc', $2]; }
    | SEC e %prec FUNCTION_APPLICATION
        {$$ = ['sec', $2]; }
    | COT e %prec FUNCTION_APPLICATION
        {$$ = ['cot', $2]; }

    | ARCSIN e %prec FUNCTION_APPLICATION
        {$$ = ['arcsin', $2]; }
    | ARCCOS e %prec FUNCTION_APPLICATION
        {$$ = ['arccos', $2]; }
    | ARCTAN e %prec FUNCTION_APPLICATION
        {$$ = ['arctan', $2]; }
    | SQRT e %prec FUNCTION_APPLICATION
        {$$ = ['sqrt', $2]; }
    | ABS e %prec FUNCTION_APPLICATION
        {$$ = ['abs', $2]; }
    | E
        {$$ = "e";}
    | PI
        {$$ = "pi";}
    | number
        {$$ = $1;}
    ;

%%

