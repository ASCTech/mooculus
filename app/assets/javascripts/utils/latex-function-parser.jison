
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?  return 'NUMBER'
"*"                     return '*'
"/"                     return '/'
"-"                     return '-'
"+"                     return '+'
"^"                     return '^'
"("                     return '('
"\\left("               return '('
"\\right)"              return ')'
"\\left["               return '['
"\\right]"              return ']'
"["                     return '['
"]"                     return ']'
"\\left|"               return 'LEFT_ABS'
"\\right|"              return 'RIGHT_ABS'
")"                     return ')'
"{"                     return '{'
"}"                     return '}'
"\\cdot"                return '*'
"\\pi"                  return 'PI'
"\\frac"                return 'FRAC'
"\\pi"                  return 'PI'
"\\sin"                 return 'SIN'
"\\cos"                 return 'COS'
"\\tan"                 return 'TAN'
"\\csc"                 return 'CSC'
"\\sec"                 return 'SEC'
"\\cot"                 return 'COT'
"\\arcsin"              return 'ARCSIN'
"\\arccos"              return 'ARCCOS'
"\\arctan"              return 'ARCTAN'
"\\asin"                return 'ARCSIN'
"\\acos"                return 'ARCCOS'
"\\atan"                return 'ARCTAN'
"\\log"                 return 'LOG'
"\\ln"                  return 'LOG'
"\\exp"                 return 'EXP'
"\\sqrt"                return 'SQRT'
[A-Za-z]                return 'VARIABLE'
<<EOF>>                 return 'EOF'
.                       return 'INVALID'

/lex

/* operator associations and precedence */


%left '+' '-'
%left '*' '/'
%right UMINUS
%right '^'
%left FUNCTION_APPLICATION

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { return $1; }
    | term EOF
        { return $1; }
    ;

term
    : NUMBER
        {$$ = parseFloat(yytext.replace(',','.'));}
    | VARIABLE
        {$$ = yytext;}
    | E
        {$$ = "e";}
    | PI
        {$$ = "pi";}
    | '(' e ')'
        {$$ = $2;}
    | '{' e '}'
        {$$ = $2;}
    | '[' e ']'
        {$$ = $2;}
    | 'LEFT_ABS' e 'RIGHT_ABS'
        {$$ = ['abs', $2]; }
    | FRAC '{' e '}' '{' e '}'
        {$$ = ['/', $3, $6]; }

    | EXP term %prec FUNCTION_APPLICATION
        {$$ = ['^', 'e', $2]; }
    | LOG term %prec FUNCTION_APPLICATION
        {$$ = ['log', $2]; }
    | SIN term %prec FUNCTION_APPLICATION
        {$$ = ['sin', $2]; }
    | COS term %prec FUNCTION_APPLICATION
        {$$ = ['cos', $2]; }
    | TAN term %prec FUNCTION_APPLICATION
        {$$ = ['tan', $2]; }

    | CSC term %prec FUNCTION_APPLICATION
        {$$ = ['csc', $2]; }
    | SEC term %prec FUNCTION_APPLICATION
        {$$ = ['sec', $2]; }
    | COT term %prec FUNCTION_APPLICATION
        {$$ = ['cot', $2]; }

    | ARCSIN term %prec FUNCTION_APPLICATION
        {$$ = ['arcsin', $2]; }
    | ARCCOS term %prec FUNCTION_APPLICATION
        {$$ = ['arccos', $2]; }
    | ARCTAN term %prec FUNCTION_APPLICATION
        {$$ = ['arctan', $2]; }
    | SQRT '{' e '}' %prec FUNCTION_APPLICATION
        {$$ = ['sqrt', $3]; }
    | e '^' term
        {$$ = ['^', $1, $3]; }
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
    | '-' e %prec UMINUS
        {$$ = ['~', $2]; }
    | term { $$ = $1; }
    ;
