var Preview = {
    Update: function () {
	var text = document.getElementById("MathInput").value; 
	if (text.length > 0) {
	    var math = MathJax.Hub.getAllJax($("#MathPreview")[0])[0];
	    try
	    {
		text = mathFunctionParser.parse(text).tex;
		MathJax.Hub.Queue(["Text",math,text]);
		$("#MathFunctionError").hide();
		$("#MathPreview").show();
	    }
	    catch(err)
	    {
		$("#MathFunctionError").show();
	    }
	} else {
	    text = '';
	    $("#MathPreview").hide();
	}
    },
};


$(Khan).bind("newProblem", function() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}); 
