
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
    | E
        {$$ = "e";}
    | PI
        {$$ = "pi";}
    | number
        {$$ = $1;}
    ;

%%

