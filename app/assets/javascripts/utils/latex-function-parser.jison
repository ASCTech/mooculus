
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"-"?[0-9]+("."[0-9]+)?  return 'NUMBER'
"="                   return '='
"*"                   return '*'
"\\cdot"              return '*'
"\cdot"               return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
"\\left("             return '('
"\\right)"            return ')'
")"                   return ')'
"{"                   return '{'
"}"                   return '}'
"\\pi"                return 'PI'
"\\frac"               return 'FRAC'
"\\pi"                  return 'PI'
"\\sin"                 return 'SIN'
"\\cos"                   return 'COS'
"\\tan"                   return 'TAN'
"\\csc"                   return 'CSC'
"\\sec"                   return 'SEC'
"\\cot"                   return 'COT'
"\\arcsin"                return 'ARCSIN'
"\\arccos"                return 'ARCCOS'
"\\arctan"                return 'ARCTAN'
"\\asin"                  return 'ARCSIN'
"\\acos"                  return 'ARCCOS'
"\\atan"                  return 'ARCTAN'
"\\log"                   return 'LOG'
"\\ln"                    return 'LOG'
"\\exp"                   return 'EXP'
"\\sqrt"                  return 'SQRT'
[A-Za-z]\b            return 'VARIABLE'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '='
%left '+' '-'
%left '*' '/'
%left UMINUS
%right '^'
%left FUNCTION_APPLICATION

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { return $1; }
    ;

e
    : e '+' e
        {$$ = ['+', $1, $3]; }
    | e '-' e
        {$$ = ['-', $1, $3]; }
    | e '*' e
        {$$ = ['*', $1, $3]; }
    | e e  %prec '*'
        {$$ = ['*', $1, $2]; }
    | e '/' e
        {$$ = ['/', $1, $3]; }
    | e '^' e
        {$$ = ['^', $1, $3]; }
    | '-' e %prec UMINUS
        {$$ = ['~', $2]; }
    | '(' e ')'
        {$$ = $2;}
    | FRAC '{' e '}' '{' e '}'
        {$$ = ['/', $3, $6]; }
    | NUMBER
        {$$ = parseFloat(yytext.replace(',','.'));}
    | VARIABLE
        {$$ = yytext;}
    | E
        {$$ = "e";}
    | PI
        {$$ = "pi";}
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
    | SQRT '{' e '}' %prec FUNCTION_APPLICATION
        {$$ = ['sqrt', $3]; }
    ;
