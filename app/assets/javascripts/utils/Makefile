all: math-function-parser.js latex-function-parser.js

math-function-parser.js: math-function-parser.jison
	node ~/trash/jison/bin/jison math-function-parser.jison

latex-function-parser.js: latex-function-parser.jison
	node ~/trash/jison/bin/jison latex-function-parser.jison
