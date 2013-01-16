/* Jison generated parser */
var mathFunctionParser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"-":7,"*":8,"/":9,"^":10,"(":11,")":12,"EXP":13,"LOG":14,"SIN":15,"COS":16,"TAN":17,"ARCSIN":18,"ARCCOS":19,"ARCTAN":20,"SQRT":21,"NUMBER":22,"E":23,"PI":24,"VAR":25,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"/",10:"^",11:"(",12:")",13:"EXP",14:"LOG",15:"SIN",16:"COS",17:"TAN",18:"ARCSIN",19:"ARCCOS",20:"ARCTAN",21:"SQRT",22:"NUMBER",23:"E",24:"PI",25:"VAR"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,3],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,1],[4,1],[4,1],[4,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: typeof console !== 'undefined' ? console.log($$[$0-1]) : print($$[$0-1]);
          return $$[$0-1]; 
break;
case 2:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-2].f(bindings) + $$[$0].f(bindings); },
				      '\\left(' + $$[$0-2].tex + ' + ' + $$[$0].tex + '\\right)' );
break;
case 3:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-2].f(bindings) - $$[$0].f(bindings); },
				      '\\left(' + $$[$0-2].tex + ' - ' + $$[$0].tex + '\\right)' );
break;
case 4:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-2].f(bindings) * $$[$0].f(bindings); },
				      '\\left(' + $$[$0-2].tex + ' \\cdot ' + $$[$0].tex + '\\right)' );
break;
case 5:this.$ = new StraightLineProgram(function(bindings){ return $$[$0-2].f(bindings) / $$[$0].f(bindings); },
				      '\\displaystyle\\frac{' + $$[$0-2].tex + '}{' + $$[$0].tex + '}' );
break;
case 6:this.$ = new StraightLineProgram(function(bindings){ return Math.pow($$[$0-2].f(bindings),$$[$0].f(bindings)); },
				      '\\left(' + $$[$0-2].tex + '\\right)^{' + $$[$0].tex + '}' );
break;
case 7:this.$ = new StraightLineProgram(function(bindings){ return -($$[$0].f(bindings)); },
				      '-\\left(' + $$[$0].tex + '\\right)' );
break;
case 8:this.$ = $$[$0-1];
break;
case 9:this.$ = new StraightLineProgram(function(bindings){ return Math.exp($$[$0].f(bindings)); },
				      'e^{' + $$[$0].tex + '}' );
break;
case 10:this.$ = new StraightLineProgram(function(bindings){ return Math.log($$[$0].f(bindings)); },
				      '\\log \\left(' + $$[$0].tex + '\\right)' );
break;
case 11:this.$ = new StraightLineProgram(function(bindings){ return Math.sin($$[$0].f(bindings)); },
				      '\\sin \\left(' + $$[$0].tex + '\\right)' );
break;
case 12:this.$ = new StraightLineProgram(function(bindings){ return Math.cos($$[$0].f(bindings)); },
				      '\\cos \\left(' + $$[$0].tex + '\\right)' );
break;
case 13:this.$ = new StraightLineProgram(function(bindings){ return Math.tan($$[$0].f(bindings)); },
				      '\\tan \\left(' + $$[$0].tex + '\\right)' );
break;
case 14:this.$ = new StraightLineProgram(function(bindings){ return Math.arcsin($$[$0].f(bindings)); },
				      '\\arcsin \\left(' + $$[$0].tex + '\\right)' );
break;
case 15:this.$ = new StraightLineProgram(function(bindings){ return Math.arccos($$[$0].f(bindings)); },
				      '\\arccos \\left(' + $$[$0].tex + '\\right)' );
break;
case 16:this.$ = new StraightLineProgram(function(bindings){ return Math.arctan($$[$0].f(bindings)); },
				      '\\arctan \\left(' + $$[$0].tex + '\\right)' );
break;
case 17:this.$ = new StraightLineProgram(function(bindings){ return Math.pow($$[$0].f(bindings),0.5); },
				      '\\sqrt{' + $$[$0].tex + '}' );
break;
case 18:this.$ = new StraightLineProgram(function(bindings){ return parseFloat(yytext); },
				      parseFloat(yytext).toString());
break;
case 19:this.$ = new StraightLineProgram(function(bindings){ return Math.E; },
				      'e');
break;
case 20:this.$ = new StraightLineProgram(function(bindings){ return Math.PI; },
				      '\\pi');
break;
case 21:this.$ = new StraightLineProgram(function(bindings){ return bindings[yytext]; },
				      yytext);
break;
}
},
table: [{3:1,4:2,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{1:[3]},{5:[1,18],6:[1,19],7:[1,20],8:[1,21],9:[1,22],10:[1,23]},{4:24,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:25,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:26,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:27,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:28,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:29,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:30,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:31,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:32,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:33,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:34,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[2,18],12:[2,18]},{5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],10:[2,19],12:[2,19]},{5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],10:[2,20],12:[2,20]},{5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],10:[2,21],12:[2,21]},{1:[2,1]},{4:35,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:36,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:37,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:38,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{4:39,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,17]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],12:[2,7]},{6:[1,19],7:[1,20],8:[1,21],9:[1,22],10:[1,23],12:[1,40]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],12:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],12:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],12:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],12:[2,12]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],12:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],12:[2,14]},{5:[2,15],6:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],12:[2,15]},{5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[2,16],12:[2,16]},{5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[2,17],12:[2,17]},{5:[2,2],6:[2,2],7:[2,2],8:[1,21],9:[1,22],10:[1,23],12:[2,2]},{5:[2,3],6:[2,3],7:[2,3],8:[1,21],9:[1,22],10:[1,23],12:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,23],12:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[1,23],12:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],12:[2,6]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],12:[2,8]}],
defaultActions: {18:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};


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
case 1:return 22
break;
case 2:return 23
break;
case 3:return 25
break;
case 4:return 8
break;
case 5:return 9
break;
case 6:return 7
break;
case 7:return 6
break;
case 8:return 10
break;
case 9:return 11
break;
case 10:return 12
break;
case 11:return 24
break;
case 12:return 15
break;
case 13:return 16
break;
case 14:return 17
break;
case 15:return 18
break;
case 16:return 19
break;
case 17:return 20
break;
case 18:return 14
break;
case 19:return 13
break;
case 20:return 21
break;
case 21:return 5
break;
case 22:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:e\b)/,/^(?:[A-Za-z]\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:pi\b)/,/^(?:sin\b)/,/^(?:cos\b)/,/^(?:tan\b)/,/^(?:arcsin\b)/,/^(?:arccos\b)/,/^(?:arctan\b)/,/^(?:log\b)/,/^(?:exp\b)/,/^(?:sqrt\b)/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"inclusive":true}};
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