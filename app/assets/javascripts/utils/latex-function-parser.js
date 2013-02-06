/* Jison generated parser */
var latexFunctionParser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"term":6,"NUMBER":7,"VARIABLE":8,"E":9,"PI":10,"(":11,")":12,"{":13,"}":14,"FRAC":15,"EXP":16,"LOG":17,"SIN":18,"COS":19,"TAN":20,"CSC":21,"SEC":22,"COT":23,"ARCSIN":24,"ARCCOS":25,"ARCTAN":26,"SQRT":27,"^":28,"+":29,"-":30,"*":31,"/":32,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"NUMBER",8:"VARIABLE",9:"E",10:"PI",11:"(",12:")",13:"{",14:"}",15:"FRAC",16:"EXP",17:"LOG",18:"SIN",19:"COS",20:"TAN",21:"CSC",22:"SEC",23:"COT",24:"ARCSIN",25:"ARCCOS",26:"ARCTAN",27:"SQRT",28:"^",29:"+",30:"-",31:"*",32:"/"},
productions_: [0,[3,2],[3,2],[6,1],[6,1],[6,1],[6,1],[6,3],[6,3],[6,7],[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[6,2],[6,4],[6,3],[4,3],[4,3],[4,3],[4,2],[4,3],[4,2],[4,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: return $$[$0-1]; 
break;
case 3:this.$ = parseFloat(yytext.replace(',','.'));
break;
case 4:this.$ = yytext;
break;
case 5:this.$ = "e";
break;
case 6:this.$ = "pi";
break;
case 7:this.$ = $$[$0-1];
break;
case 8:this.$ = $$[$0-1];
break;
case 9:this.$ = ['/', $$[$0-4], $$[$0-1]]; 
break;
case 10:this.$ = ['^', 'e', $$[$0]]; 
break;
case 11:this.$ = ['log', $$[$0]]; 
break;
case 12:this.$ = ['sin', $$[$0]]; 
break;
case 13:this.$ = ['cos', $$[$0]]; 
break;
case 14:this.$ = ['tan', $$[$0]]; 
break;
case 15:this.$ = ['csc', $$[$0]]; 
break;
case 16:this.$ = ['sec', $$[$0]]; 
break;
case 17:this.$ = ['cot', $$[$0]]; 
break;
case 18:this.$ = ['arcsin', $$[$0]]; 
break;
case 19:this.$ = ['arccos', $$[$0]]; 
break;
case 20:this.$ = ['arctan', $$[$0]]; 
break;
case 21:this.$ = ['sqrt', $$[$0-1]]; 
break;
case 22:this.$ = ['^', $$[$0-2], $$[$0]]; 
break;
case 23:this.$ = ['+', $$[$0-2], $$[$0]]; 
break;
case 24:this.$ = ['-', $$[$0-2], $$[$0]]; 
break;
case 25:this.$ = ['*', $$[$0-2], $$[$0]]; 
break;
case 26:this.$ = ['*', $$[$0-1], $$[$0]]; 
break;
case 27:this.$ = ['/', $$[$0-2], $$[$0]]; 
break;
case 28:this.$ = ['~', $$[$0]]; 
break;
case 29: this.$ = $$[$0]; 
break;
}
},
table: [{3:1,4:2,6:3,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{1:[3]},{4:28,5:[1,24],6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[1,25],30:[1,26],31:[1,27],32:[1,29]},{5:[1,32],7:[2,29],8:[2,29],9:[2,29],10:[2,29],11:[2,29],13:[2,29],15:[2,29],16:[2,29],17:[2,29],18:[2,29],19:[2,29],20:[2,29],21:[2,29],22:[2,29],23:[2,29],24:[2,29],25:[2,29],26:[2,29],27:[2,29],28:[2,29],29:[2,29],30:[2,29],31:[2,29],32:[2,29]},{4:33,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{5:[2,3],7:[2,3],8:[2,3],9:[2,3],10:[2,3],11:[2,3],12:[2,3],13:[2,3],14:[2,3],15:[2,3],16:[2,3],17:[2,3],18:[2,3],19:[2,3],20:[2,3],21:[2,3],22:[2,3],23:[2,3],24:[2,3],25:[2,3],26:[2,3],27:[2,3],28:[2,3],29:[2,3],30:[2,3],31:[2,3],32:[2,3]},{5:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[2,4],11:[2,4],12:[2,4],13:[2,4],14:[2,4],15:[2,4],16:[2,4],17:[2,4],18:[2,4],19:[2,4],20:[2,4],21:[2,4],22:[2,4],23:[2,4],24:[2,4],25:[2,4],26:[2,4],27:[2,4],28:[2,4],29:[2,4],30:[2,4],31:[2,4],32:[2,4]},{5:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[2,5],17:[2,5],18:[2,5],19:[2,5],20:[2,5],21:[2,5],22:[2,5],23:[2,5],24:[2,5],25:[2,5],26:[2,5],27:[2,5],28:[2,5],29:[2,5],30:[2,5],31:[2,5],32:[2,5]},{5:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[2,6],17:[2,6],18:[2,6],19:[2,6],20:[2,6],21:[2,6],22:[2,6],23:[2,6],24:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],29:[2,6],30:[2,6],31:[2,6],32:[2,6]},{4:34,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:35,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{13:[1,36]},{4:38,6:37,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:39,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:40,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:41,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:42,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:43,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:44,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:45,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:46,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:47,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:48,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{13:[1,49]},{1:[2,1]},{4:50,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:51,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:52,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:28,5:[2,26],6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],12:[2,26],13:[1,10],14:[2,26],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[2,26],30:[2,26],31:[2,26],32:[2,26]},{4:53,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:38,6:54,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{5:[2,29],7:[2,29],8:[2,29],9:[2,29],10:[2,29],11:[2,29],12:[2,29],13:[2,29],14:[2,29],15:[2,29],16:[2,29],17:[2,29],18:[2,29],19:[2,29],20:[2,29],21:[2,29],22:[2,29],23:[2,29],24:[2,29],25:[2,29],26:[2,29],27:[2,29],28:[2,29],29:[2,29],30:[2,29],31:[2,29],32:[2,29]},{1:[2,2]},{4:28,5:[2,28],6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],12:[2,28],13:[1,10],14:[2,28],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[2,28],30:[2,28],31:[2,28],32:[2,28]},{4:28,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],12:[1,55],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[1,25],30:[1,26],31:[1,27],32:[1,29]},{4:28,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],14:[1,56],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[1,25],30:[1,26],31:[1,27],32:[1,29]},{4:57,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{5:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[2,10],17:[2,10],18:[2,10],19:[2,10],20:[2,10],21:[2,10],22:[2,10],23:[2,10],24:[2,10],25:[2,10],26:[2,10],27:[2,10],28:[2,10],29:[2,10],30:[2,10],31:[2,10],32:[2,10]},{4:28,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[1,25],30:[1,26],31:[1,27],32:[1,29]},{5:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],17:[2,11],18:[2,11],19:[2,11],20:[2,11],21:[2,11],22:[2,11],23:[2,11],24:[2,11],25:[2,11],26:[2,11],27:[2,11],28:[2,11],29:[2,11],30:[2,11],31:[2,11],32:[2,11]},{5:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],17:[2,12],18:[2,12],19:[2,12],20:[2,12],21:[2,12],22:[2,12],23:[2,12],24:[2,12],25:[2,12],26:[2,12],27:[2,12],28:[2,12],29:[2,12],30:[2,12],31:[2,12],32:[2,12]},{5:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],17:[2,13],18:[2,13],19:[2,13],20:[2,13],21:[2,13],22:[2,13],23:[2,13],24:[2,13],25:[2,13],26:[2,13],27:[2,13],28:[2,13],29:[2,13],30:[2,13],31:[2,13],32:[2,13]},{5:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],17:[2,14],18:[2,14],19:[2,14],20:[2,14],21:[2,14],22:[2,14],23:[2,14],24:[2,14],25:[2,14],26:[2,14],27:[2,14],28:[2,14],29:[2,14],30:[2,14],31:[2,14],32:[2,14]},{5:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],11:[2,15],12:[2,15],13:[2,15],14:[2,15],15:[2,15],16:[2,15],17:[2,15],18:[2,15],19:[2,15],20:[2,15],21:[2,15],22:[2,15],23:[2,15],24:[2,15],25:[2,15],26:[2,15],27:[2,15],28:[2,15],29:[2,15],30:[2,15],31:[2,15],32:[2,15]},{5:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[2,16],11:[2,16],12:[2,16],13:[2,16],14:[2,16],15:[2,16],16:[2,16],17:[2,16],18:[2,16],19:[2,16],20:[2,16],21:[2,16],22:[2,16],23:[2,16],24:[2,16],25:[2,16],26:[2,16],27:[2,16],28:[2,16],29:[2,16],30:[2,16],31:[2,16],32:[2,16]},{5:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[2,17],11:[2,17],12:[2,17],13:[2,17],14:[2,17],15:[2,17],16:[2,17],17:[2,17],18:[2,17],19:[2,17],20:[2,17],21:[2,17],22:[2,17],23:[2,17],24:[2,17],25:[2,17],26:[2,17],27:[2,17],28:[2,17],29:[2,17],30:[2,17],31:[2,17],32:[2,17]},{5:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[2,18],11:[2,18],12:[2,18],13:[2,18],14:[2,18],15:[2,18],16:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18],21:[2,18],22:[2,18],23:[2,18],24:[2,18],25:[2,18],26:[2,18],27:[2,18],28:[2,18],29:[2,18],30:[2,18],31:[2,18],32:[2,18]},{5:[2,19],7:[2,19],8:[2,19],9:[2,19],10:[2,19],11:[2,19],12:[2,19],13:[2,19],14:[2,19],15:[2,19],16:[2,19],17:[2,19],18:[2,19],19:[2,19],20:[2,19],21:[2,19],22:[2,19],23:[2,19],24:[2,19],25:[2,19],26:[2,19],27:[2,19],28:[2,19],29:[2,19],30:[2,19],31:[2,19],32:[2,19]},{5:[2,20],7:[2,20],8:[2,20],9:[2,20],10:[2,20],11:[2,20],12:[2,20],13:[2,20],14:[2,20],15:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],20:[2,20],21:[2,20],22:[2,20],23:[2,20],24:[2,20],25:[2,20],26:[2,20],27:[2,20],28:[2,20],29:[2,20],30:[2,20],31:[2,20],32:[2,20]},{4:58,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:28,5:[2,23],6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],12:[2,23],13:[1,10],14:[2,23],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[2,23],30:[2,23],31:[1,27],32:[1,29]},{4:28,5:[2,24],6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],12:[2,24],13:[1,10],14:[2,24],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[2,24],30:[2,24],31:[2,28],32:[2,28]},{4:28,5:[2,25],6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],12:[2,25],13:[1,10],14:[2,25],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[2,25],30:[2,25],31:[2,25],32:[2,25]},{4:28,5:[2,27],6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],12:[2,27],13:[1,10],14:[2,27],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[2,27],30:[2,27],31:[2,27],32:[2,27]},{5:[2,22],7:[2,22],8:[2,22],9:[2,22],10:[2,22],11:[2,22],12:[2,22],13:[2,22],14:[2,22],15:[2,22],16:[2,22],17:[2,22],18:[2,22],19:[2,22],20:[2,22],21:[2,22],22:[2,22],23:[2,22],24:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[2,22],29:[2,22],30:[2,22],31:[2,22],32:[2,22]},{5:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[2,7],17:[2,7],18:[2,7],19:[2,7],20:[2,7],21:[2,7],22:[2,7],23:[2,7],24:[2,7],25:[2,7],26:[2,7],27:[2,7],28:[2,7],29:[2,7],30:[2,7],31:[2,7],32:[2,7]},{5:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[2,8],17:[2,8],18:[2,8],19:[2,8],20:[2,8],21:[2,8],22:[2,8],23:[2,8],24:[2,8],25:[2,8],26:[2,8],27:[2,8],28:[2,8],29:[2,8],30:[2,8],31:[2,8],32:[2,8]},{4:28,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],14:[1,59],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[1,25],30:[1,26],31:[1,27],32:[1,29]},{4:28,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],14:[1,60],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[1,25],30:[1,26],31:[1,27],32:[1,29]},{13:[1,61]},{5:[2,21],7:[2,21],8:[2,21],9:[2,21],10:[2,21],11:[2,21],12:[2,21],13:[2,21],14:[2,21],15:[2,21],16:[2,21],17:[2,21],18:[2,21],19:[2,21],20:[2,21],21:[2,21],22:[2,21],23:[2,21],24:[2,21],25:[2,21],26:[2,21],27:[2,21],28:[2,21],29:[2,21],30:[2,21],31:[2,21],32:[2,21]},{4:62,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],30:[1,4]},{4:28,6:31,7:[1,5],8:[1,6],9:[1,7],10:[1,8],11:[1,9],13:[1,10],14:[1,63],15:[1,11],16:[1,12],17:[1,13],18:[1,14],19:[1,15],20:[1,16],21:[1,17],22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22],27:[1,23],28:[1,30],29:[1,25],30:[1,26],31:[1,27],32:[1,29]},{5:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[2,9],17:[2,9],18:[2,9],19:[2,9],20:[2,9],21:[2,9],22:[2,9],23:[2,9],24:[2,9],25:[2,9],26:[2,9],27:[2,9],28:[2,9],29:[2,9],30:[2,9],31:[2,9],32:[2,9]}],
defaultActions: {24:[2,1],32:[2,2]},
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
case 2:return 31
break;
case 3:return 32
break;
case 4:return 30
break;
case 5:return 29
break;
case 6:return 28
break;
case 7:return 11
break;
case 8:return 11
break;
case 9:return 12
break;
case 10:return 12
break;
case 11:return 13
break;
case 12:return 14
break;
case 13:return 31
break;
case 14:return 10
break;
case 15:return 15
break;
case 16:return 10
break;
case 17:return 18
break;
case 18:return 19
break;
case 19:return 20
break;
case 20:return 21
break;
case 21:return 22
break;
case 22:return 23
break;
case 23:return 24
break;
case 24:return 25
break;
case 25:return 26
break;
case 26:return 24
break;
case 27:return 25
break;
case 28:return 26
break;
case 29:return 17
break;
case 30:return 17
break;
case 31:return 16
break;
case 32:return 27
break;
case 33:return 8
break;
case 34:return 5
break;
case 35:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\\left\()/,/^(?:\\right\))/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:\\cdot\b)/,/^(?:\\pi\b)/,/^(?:\\frac\b)/,/^(?:\\pi\b)/,/^(?:\\sin\b)/,/^(?:\\cos\b)/,/^(?:\\tan\b)/,/^(?:\\csc\b)/,/^(?:\\sec\b)/,/^(?:\\cot\b)/,/^(?:\\arcsin\b)/,/^(?:\\arccos\b)/,/^(?:\\arctan\b)/,/^(?:\\asin\b)/,/^(?:\\acos\b)/,/^(?:\\atan\b)/,/^(?:\\log\b)/,/^(?:\\ln\b)/,/^(?:\\exp\b)/,/^(?:\\sqrt\b)/,/^(?:[A-Za-z])/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = latexFunctionParser;
exports.Parser = latexFunctionParser.Parser;
exports.parse = function () { return latexFunctionParser.parse.apply(latexFunctionParser, arguments); }
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