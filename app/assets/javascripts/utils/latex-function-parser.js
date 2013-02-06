/* Jison generated parser */
var latexFunctionParser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"^":7,"-":8,"*":9,"/":10,"(":11,")":12,"FRAC":13,"{":14,"}":15,"NUMBER":16,"VARIABLE":17,"E":18,"PI":19,"EXP":20,"LOG":21,"SIN":22,"COS":23,"TAN":24,"CSC":25,"SEC":26,"COT":27,"ARCSIN":28,"ARCCOS":29,"ARCTAN":30,"SQRT":31,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"+",7:"^",8:"-",9:"*",10:"/",11:"(",12:")",13:"FRAC",14:"{",15:"}",16:"NUMBER",17:"VARIABLE",18:"E",19:"PI",20:"EXP",21:"LOG",22:"SIN",23:"COS",24:"TAN",25:"CSC",26:"SEC",27:"COT",28:"ARCSIN",29:"ARCCOS",30:"ARCTAN",31:"SQRT"},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,2],[4,3],[4,2],[4,3],[4,7],[4,1],[4,1],[4,1],[4,1],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,4]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2:this.$ = ['+', $$[$0-2], $$[$0]]; 
break;
case 3:this.$ = ['^', $$[$0-2], $$[$0]]; 
break;
case 4:this.$ = ['-', $$[$0-2], $$[$0]]; 
break;
case 5:this.$ = ['*', $$[$0-2], $$[$0]]; 
break;
case 6:this.$ = ['*', $$[$0-1], $$[$0]]; 
break;
case 7:this.$ = ['/', $$[$0-2], $$[$0]]; 
break;
case 8:this.$ = ['~', $$[$0]]; 
break;
case 9:this.$ = $$[$0-1];
break;
case 10:this.$ = ['/', $$[$0-4], $$[$0-1]]; 
break;
case 11:this.$ = parseFloat(yytext.replace(',','.'));
break;
case 12:this.$ = yytext;
break;
case 13:this.$ = "e";
break;
case 14:this.$ = "pi";
break;
case 15:this.$ = ['^', 'e', $$[$0]]; 
break;
case 16:this.$ = ['log', $$[$0]]; 
break;
case 17:this.$ = ['sin', $$[$0]]; 
break;
case 18:this.$ = ['cos', $$[$0]]; 
break;
case 19:this.$ = ['tan', $$[$0]]; 
break;
case 20:this.$ = ['csc', $$[$0]]; 
break;
case 21:this.$ = ['sec', $$[$0]]; 
break;
case 22:this.$ = ['cot', $$[$0]]; 
break;
case 23:this.$ = ['arcsin', $$[$0]]; 
break;
case 24:this.$ = ['arccos', $$[$0]]; 
break;
case 25:this.$ = ['arctan', $$[$0]]; 
break;
case 26:this.$ = ['sqrt', $$[$0-1]]; 
break;
}
},
table: [{3:1,4:2,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{1:[3]},{4:27,5:[1,22],6:[1,23],7:[1,24],8:[1,25],9:[1,26],10:[1,28],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:29,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:30,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{14:[1,31]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],15:[2,11],16:[2,11],17:[2,11],18:[2,11],19:[2,11],20:[2,11],21:[2,11],22:[2,11],23:[2,11],24:[2,11],25:[2,11],26:[2,11],27:[2,11],28:[2,11],29:[2,11],30:[2,11],31:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],15:[2,12],16:[2,12],17:[2,12],18:[2,12],19:[2,12],20:[2,12],21:[2,12],22:[2,12],23:[2,12],24:[2,12],25:[2,12],26:[2,12],27:[2,12],28:[2,12],29:[2,12],30:[2,12],31:[2,12]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],15:[2,13],16:[2,13],17:[2,13],18:[2,13],19:[2,13],20:[2,13],21:[2,13],22:[2,13],23:[2,13],24:[2,13],25:[2,13],26:[2,13],27:[2,13],28:[2,13],29:[2,13],30:[2,13],31:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],15:[2,14],16:[2,14],17:[2,14],18:[2,14],19:[2,14],20:[2,14],21:[2,14],22:[2,14],23:[2,14],24:[2,14],25:[2,14],26:[2,14],27:[2,14],28:[2,14],29:[2,14],30:[2,14],31:[2,14]},{4:32,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:33,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:34,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:35,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:36,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:37,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:38,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:39,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:40,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:41,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:42,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{14:[1,43]},{1:[2,1]},{4:44,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:45,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:46,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:47,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,6],6:[2,6],7:[1,24],8:[2,6],9:[2,6],10:[2,6],11:[1,4],12:[2,6],13:[1,5],15:[2,6],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:48,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,8],6:[2,8],7:[1,24],8:[2,8],9:[2,8],10:[2,8],11:[1,4],12:[2,8],13:[1,5],15:[2,8],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,6:[1,23],7:[1,24],8:[1,25],9:[1,26],10:[1,28],11:[1,4],12:[1,49],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:50,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,15],6:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],11:[1,4],12:[2,15],13:[1,5],15:[2,15],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[2,16],11:[1,4],12:[2,16],13:[1,5],15:[2,16],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[2,17],11:[1,4],12:[2,17],13:[1,5],15:[2,17],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[2,18],11:[1,4],12:[2,18],13:[1,5],15:[2,18],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],10:[2,19],11:[1,4],12:[2,19],13:[1,5],15:[2,19],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],10:[2,20],11:[1,4],12:[2,20],13:[1,5],15:[2,20],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],10:[2,21],11:[1,4],12:[2,21],13:[1,5],15:[2,21],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,22],6:[2,22],7:[2,22],8:[2,22],9:[2,22],10:[2,22],11:[1,4],12:[2,22],13:[1,5],15:[2,22],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,23],6:[2,23],7:[2,23],8:[2,23],9:[2,23],10:[2,23],11:[1,4],12:[2,23],13:[1,5],15:[2,23],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,24],6:[2,24],7:[2,24],8:[2,24],9:[2,24],10:[2,24],11:[1,4],12:[2,24],13:[1,5],15:[2,24],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,25],6:[2,25],7:[2,25],8:[2,25],9:[2,25],10:[2,25],11:[1,4],12:[2,25],13:[1,5],15:[2,25],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:51,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,2],6:[2,2],7:[1,24],8:[2,2],9:[1,26],10:[1,28],11:[1,4],12:[2,2],13:[1,5],15:[2,2],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,3],6:[2,3],7:[1,24],8:[2,3],9:[2,3],10:[2,3],11:[1,4],12:[2,3],13:[1,5],15:[2,3],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,4],6:[2,4],7:[1,24],8:[2,4],9:[2,8],10:[2,8],11:[1,4],12:[2,4],13:[1,5],15:[2,4],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,5],6:[2,5],7:[1,24],8:[2,5],9:[2,5],10:[2,5],11:[1,4],12:[2,5],13:[1,5],15:[2,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,5:[2,7],6:[2,7],7:[1,24],8:[2,7],9:[2,7],10:[2,7],11:[1,4],12:[2,7],13:[1,5],15:[2,7],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],15:[2,9],16:[2,9],17:[2,9],18:[2,9],19:[2,9],20:[2,9],21:[2,9],22:[2,9],23:[2,9],24:[2,9],25:[2,9],26:[2,9],27:[2,9],28:[2,9],29:[2,9],30:[2,9],31:[2,9]},{4:27,6:[1,23],7:[1,24],8:[1,25],9:[1,26],10:[1,28],11:[1,4],13:[1,5],15:[1,52],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,6:[1,23],7:[1,24],8:[1,25],9:[1,26],10:[1,28],11:[1,4],13:[1,5],15:[1,53],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{14:[1,54]},{5:[2,26],6:[2,26],7:[2,26],8:[2,26],9:[2,26],10:[2,26],11:[2,26],12:[2,26],13:[2,26],15:[2,26],16:[2,26],17:[2,26],18:[2,26],19:[2,26],20:[2,26],21:[2,26],22:[2,26],23:[2,26],24:[2,26],25:[2,26],26:[2,26],27:[2,26],28:[2,26],29:[2,26],30:[2,26],31:[2,26]},{4:55,8:[1,3],11:[1,4],13:[1,5],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{4:27,6:[1,23],7:[1,24],8:[1,25],9:[1,26],10:[1,28],11:[1,4],13:[1,5],15:[1,56],16:[1,6],17:[1,7],18:[1,8],19:[1,9],20:[1,10],21:[1,11],22:[1,12],23:[1,13],24:[1,14],25:[1,15],26:[1,16],27:[1,17],28:[1,18],29:[1,19],30:[1,20],31:[1,21]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],15:[2,10],16:[2,10],17:[2,10],18:[2,10],19:[2,10],20:[2,10],21:[2,10],22:[2,10],23:[2,10],24:[2,10],25:[2,10],26:[2,10],27:[2,10],28:[2,10],29:[2,10],30:[2,10],31:[2,10]}],
defaultActions: {22:[2,1]},
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
case 1:return 16
break;
case 2:return 9
break;
case 3:return 10
break;
case 4:return 8
break;
case 5:return 6
break;
case 6:return 7
break;
case 7:return 11
break;
case 8:return 11
break;
case 9:return 12
break;
case 10:return 12
break;
case 11:return 14
break;
case 12:return 15
break;
case 13:return 9
break;
case 14:return 19
break;
case 15:return 13
break;
case 16:return 19
break;
case 17:return 22
break;
case 18:return 23
break;
case 19:return 24
break;
case 20:return 25
break;
case 21:return 26
break;
case 22:return 27
break;
case 23:return 28
break;
case 24:return 29
break;
case 25:return 30
break;
case 26:return 28
break;
case 27:return 29
break;
case 28:return 30
break;
case 29:return 21
break;
case 30:return 21
break;
case 31:return 20
break;
case 32:return 31
break;
case 33:return 17
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