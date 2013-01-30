$(function() {
    window.setTimeout(function() {
	console.log( "Requesting Typeset after half a second..." );
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    },500);
    window.setTimeout(function() {
	console.log( "Requesting Typeset after two seconds..." );
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    },2000);
});
