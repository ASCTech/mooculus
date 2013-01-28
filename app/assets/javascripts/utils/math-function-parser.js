/* Jison generated parser */
var mathFunctionParser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"number":6,"NUMBER":7,"variable":8,"VAR":9,"+":10,"-":11,"*":12,"^":13,"/":14,"(":15,")":16,"EXP":17,"LOG":18,"SIN":19,"COS":20,"TAN":21,"CSC":22,"SEC":23,"COT":24,"ARCSIN":25,"ARCCOS":26,"ARCTAN":27,"SQRT":28,"E":29,"PI":30,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"NUMBER",9:"VAR",10:"+",11:"-",12:"*",13:"^",14:"/",15:"(",16:")",17:"EXP",18:"LOG",19:"SIN",20:"COS",21:"TAN",22:"CSC",23:"SEC",24:"COT",25:"ARCSIN",26:"ARCCOS",27:"ARCTAN",28:"SQRT",29:"E",30:"PI"},
productions_: [0,[3,2],[6,1],[8,1],[4,3],[4,3],[4,3],[4,4],[4,1],[4,2],[4,3],[4,3],[4,2],[4,2],[4,3],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,1],[4,1],[4,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2:this.$ = new StraightLineProgram(function(bindings){ return parseFloat(yytext.replace(',','.')); },
				      parseFloat(yytext.replace(',','.')).toString(),
				      parseFloat(yytext.replace(',','.')).toString());
break;
case 3:this.$ = new StraightLineProgram(function(bindings){ return bindings[yytext.toLowerCase()]; },
				      yytext.toLowerCase(),
				      yytext.toLowerCase());
break;
case 4:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-2].evaluate(bindings) + $$[$0].evaluate(bindings); },
				      '\\left(' + $$[$0-2].tex + ' + ' + $$[$0].tex + '\\right)',
				      ['+', $$[$0-2].syntax_tree, $$[$0].syntax_tree] );
break;
case 5:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-2].evaluate(bindings) - $$[$0].evaluate(bindings); },
				      '\\left(' + $$[$0-2].tex + ' - ' + $$[$0].tex + '\\right)',
				      ['-', $$[$0-2].syntax_tree, $$[$0].syntax_tree] );
break;
case 6:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-2].evaluate(bindings) * $$[$0].evaluate(bindings); },
				      '\\left(' + $$[$0-2].tex + ' \\cdot ' + $$[$0].tex + '\\right)',
				      ['*', $$[$0-2].syntax_tree, $$[$0].syntax_tree] );
break;
case 7:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-3].evaluate(bindings) * Math.pow($$[$0-2].evaluate(bindings),$$[$0].evaluate(bindings)); },
	  			      '\\left(' + $$[$0-3].tex + ' \\cdot \\left(' + $$[$0-2].tex + '\\right)^{' + $$[$0].tex + '}\\right)',
				      ['*', $$[$0-3].syntax_tree, ['^', $$[$0-2].syntax_tree, $$[$0].syntax_tree]] );
break;
case 8:this.$ = $$[$0]
break;
case 9:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-1].evaluate(bindings) * $$[$0].evaluate(bindings); },
				      '\\left(' + $$[$0-1].tex + ' \\cdot ' + $$[$0].tex + '\\right)',
				      ['*', $$[$0-1].syntax_tree, $$[$0].syntax_tree] );
break;
case 10:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-2].evaluate(bindings) / $$[$0].evaluate(bindings); },
				      '\\displaystyle\\frac{' + $$[$0-2].tex + '}{' + $$[$0].tex + '}',
				      ['/', $$[$0-2].syntax_tree, $$[$0].syntax_tree] );
break;
case 11:this.$ = new StraightLineProgram(function(bindings){ return Math.pow($$[$0-2].evaluate(bindings),$$[$0].evaluate(bindings)); },
				      '\\left(' + $$[$0-2].tex + '\\right)^{' + $$[$0].tex + '}',
				      ['^', $$[$0-2].syntax_tree, $$[$0].syntax_tree] );
break;
case 12:this.$ = new StraightLineProgram(function(bindings){ return -($$[$0].evaluate(bindings)); },
				      '-\\left(' + $$[$0].tex + '\\right)',
				      ['*', -1, $$[$0].syntax_tree] );
break;
case 13:this.$ = $$[$0];
break;
case 14:this.$ = $$[$0-1];
break;
case 15:this.$ = new StraightLineProgram(function(bindings){ return Math.pow(Math.E,$$[$0].evaluate(bindings)); },
				      'e^{' + $$[$0].tex + '}',
				      ['^', 'e', $$[$0].syntax_tree] );
break;
case 16:this.$ = new StraightLineProgram(function(bindings){ return Math.log($$[$0].evaluate(bindings)); },
				      '\\log \\left(' + $$[$0].tex + '\\right)',
				      ['log', $$[$0].syntax_tree] );
break;
case 17:this.$ = new StraightLineProgram(function(bindings){ return Math.sin($$[$0].evaluate(bindings)); },
				      '\\sin \\left(' + $$[$0].tex + '\\right)',
				      ['sin', $$[$0].syntax_tree] );
break;
case 18:this.$ = new StraightLineProgram(function(bindings){ return Math.cos($$[$0].evaluate(bindings)); },
				      '\\cos \\left(' + $$[$0].tex + '\\right)',
				      ['cos', $$[$0].syntax_tree] );
break;
case 19:this.$ = new StraightLineProgram(function(bindings){ return Math.tan($$[$0].evaluate(bindings)); },
				      '\\tan \\left(' + $$[$0].tex + '\\right)',
				      ['tan', $$[$0].syntax_tree] );
break;
case 20:this.$ = new StraightLineProgram(function(bindings){ return 1.0/Math.sin($$[$0].evaluate(bindings)); },
				      '\\csc \\left(' + $$[$0].tex + '\\right)',
				      ['csc', $$[$0].syntax_tree] );
break;
case 21:this.$ = new StraightLineProgram(function(bindings){ return 1.0/Math.cos($$[$0].evaluate(bindings)); },
				      '\\sec \\left(' + $$[$0].tex + '\\right)',
				      ['sec', $$[$0].syntax_tree] );
break;
case 22:this.$ = new StraightLineProgram(function(bindings){ return 1.0/Math.tan($$[$0].evaluate(bindings)); },
				      '\\cot \\left(' + $$[$0].tex + '\\right)',
				      ['cot', $$[$0].syntax_tree] );
break;
case 23:this.$ = new StraightLineProgram(function(bindings){ return Math.arcsin($$[$0].evaluate(bindings)); },
				      '\\arcsin \\left(' + $$[$0].tex + '\\right)',
				      ['arcsin', $$[$0].syntax_tree] );
break;
case 24:this.$ = new StraightLineProgram(function(bindings){ return Math.arccos($$[$0].evaluate(bindings)); },
				      '\\arccos \\left(' + $$[$0].tex + '\\right)',
				      ['arccos', $$[$0].syntax_tree] );
break;
case 25:this.$ = new StraightLineProgram(function(bindings){ return Math.arctan($$[$0].evaluate(bindings)); },
				      '\\arctan \\left(' + $$[$0].tex + '\\right)',
				      ['arctan', $$[$0].syntax_tree] );
break;
case 26:this.$ = new StraightLineProgram(function(bindings){ return Math.pow($$[$0].evaluate(bindings),0.5); },
				      '\\sqrt{' + $$[$0].tex + '}',
				      ['sqrt', $$[$0].syntax_tree] );
break;
case 27:this.$ = new StraightLineProgram(function(bindings){ return Math.E; },
				      'e', "e");
break;
case 28:this.$ = new StraightLineProgram(function(bindings){ return Math.PI; },
				      '\\pi', "pi");
break;
case 29:this.$ = $$[$0];
break;
}
},
table: [{3:1,4:2,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{1:[3]},{5:[1,24],10:[1,25],11:[1,26],12:[1,27],13:[1,29],14:[1,28]},{5:[2,29],8:30,9:[1,23],10:[2,29],11:[2,29],12:[2,29],13:[2,29],14:[2,29],16:[2,29]},{5:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],16:[2,8]},{4:31,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:32,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:33,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:34,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:35,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:36,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:37,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:38,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:39,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:40,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:41,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:42,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:43,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:44,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:45,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{5:[2,27],10:[2,27],11:[2,27],12:[2,27],13:[2,27],14:[2,27],16:[2,27]},{5:[2,28],10:[2,28],11:[2,28],12:[2,28],13:[2,28],14:[2,28],16:[2,28]},{5:[2,2],9:[2,2],10:[2,2],11:[2,2],12:[2,2],13:[2,2],14:[2,2],16:[2,2]},{5:[2,3],10:[2,3],11:[2,3],12:[2,3],13:[2,3],14:[2,3],16:[2,3]},{1:[2,1]},{4:46,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:47,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:48,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:49,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{4:50,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{5:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[1,51],14:[2,9],16:[2,9]},{5:[2,12],10:[2,12],11:[2,12],12:[1,27],13:[1,29],14:[1,28],16:[2,12]},{5:[2,13],10:[2,13],11:[2,13],12:[1,27],13:[1,29],14:[1,28],16:[2,13]},{10:[1,25],11:[1,26],12:[1,27],13:[1,29],14:[1,28],16:[1,52]},{5:[2,15],10:[2,15],11:[2,15],12:[2,15],13:[2,15],14:[2,15],16:[2,15]},{5:[2,16],10:[2,16],11:[2,16],12:[2,16],13:[2,16],14:[2,16],16:[2,16]},{5:[2,17],10:[2,17],11:[2,17],12:[2,17],13:[2,17],14:[2,17],16:[2,17]},{5:[2,18],10:[2,18],11:[2,18],12:[2,18],13:[2,18],14:[2,18],16:[2,18]},{5:[2,19],10:[2,19],11:[2,19],12:[2,19],13:[2,19],14:[2,19],16:[2,19]},{5:[2,20],10:[2,20],11:[2,20],12:[2,20],13:[2,20],14:[2,20],16:[2,20]},{5:[2,21],10:[2,21],11:[2,21],12:[2,21],13:[2,21],14:[2,21],16:[2,21]},{5:[2,22],10:[2,22],11:[2,22],12:[2,22],13:[2,22],14:[2,22],16:[2,22]},{5:[2,23],10:[2,23],11:[2,23],12:[2,23],13:[2,23],14:[2,23],16:[2,23]},{5:[2,24],10:[2,24],11:[2,24],12:[2,24],13:[2,24],14:[2,24],16:[2,24]},{5:[2,25],10:[2,25],11:[2,25],12:[2,25],13:[2,25],14:[2,25],16:[2,25]},{5:[2,26],10:[2,26],11:[2,26],12:[2,26],13:[2,26],14:[2,26],16:[2,26]},{5:[2,4],10:[2,4],11:[2,4],12:[1,27],13:[1,29],14:[1,28],16:[2,4]},{5:[2,5],10:[2,5],11:[2,5],12:[1,27],13:[1,29],14:[1,28],16:[2,5]},{5:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[1,29],14:[2,6],16:[2,6]},{5:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[1,29],14:[2,10],16:[2,10]},{5:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[1,29],14:[2,11],16:[2,11]},{4:53,6:3,7:[1,22],8:4,9:[1,23],10:[1,6],11:[1,5],15:[1,7],17:[1,8],18:[1,9],19:[1,10],20:[1,11],21:[1,12],22:[1,13],23:[1,14],24:[1,15],25:[1,16],26:[1,17],27:[1,18],28:[1,19],29:[1,20],30:[1,21]},{5:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],16:[2,14]},{5:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[1,29],14:[2,7],16:[2,7]}],
defaultActions: {24:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    var ranges = this.lexer.options && this.lexer.options.ranges;

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            var errStr = '';
            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state === 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol == 2 ? null : symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};


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

/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 7
break;
case 2:return 29
break;
case 3:return 9
break;
case 4:return 12
break;
case 5:return 14
break;
case 6:return 11
break;
case 7:return 10
break;
case 8:return 13
break;
case 9:return 15
break;
case 10:return 16
break;
case 11:return 30
break;
case 12:return 19
break;
case 13:return 20
break;
case 14:return 21
break;
case 15:return 22
break;
case 16:return 23
break;
case 17:return 24
break;
case 18:return 25
break;
case 19:return 26
break;
case 20:return 27
break;
case 21:return 18
break;
case 22:return 18
break;
case 23:return 17
break;
case 24:return 28
break;
case 25:return 5
break;
case 26:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:[0-9]+([,.][0-9]+)?)/,/^(?:e\b)/,/^(?:[A-Za-z]\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:pi\b)/,/^(?:sin\b)/,/^(?:cos\b)/,/^(?:tan\b)/,/^(?:csc\b)/,/^(?:sec\b)/,/^(?:cot\b)/,/^(?:arcsin\b)/,/^(?:arccos\b)/,/^(?:arctan\b)/,/^(?:log\b)/,/^(?:ln\b)/,/^(?:exp\b)/,/^(?:sqrt\b)/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = mathFunctionParser;
exports.Parser = mathFunctionParser.Parser;
exports.parse = function () { return mathFunctionParser.parse.apply(mathFunctionParser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}