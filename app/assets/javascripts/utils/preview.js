$(function() {
    $(document).keyup( function() {
	$( "div.parsed-expression-answer-type" ).each(function() {
	    var input_box = $(this);

	    window.setTimeout( function() {
		var text; 
		var parser; 

		if ($(input_box).children('.mathquill-editable').length > 0) {
		    text = $(input_box).children('.mathquill-editable').mathquill('latex');
		    parser = MathFunction.parse_tex;
		} else {
		    text = $(input_box).children('.parsed-expression').val();
		    parser = MathFunction.parse;
		}

		if (text.length > 0) {
		    var math = MathJax.Hub.getAllJax($(input_box).children(".MathPreview")[0])[0];
		    try
		    {
			var latex = parser(text).tex();
			MathJax.Hub.Queue(["Text",math,latex]);
			$(input_box).children(".MathFunctionError").hide();
			$(input_box).children(".MathPreview").show();
		    }
		    catch(err)
		    {
			$(input_box).children(".MathFunctionError").show();
			$(input_box).children(".MathPreview").hide();
		    }
		} else {
		    $(input_box).children(".MathPreview").hide();
		}
	    }, 250 );
	});
    });
});






