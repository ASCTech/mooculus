$(function() {
    $(document).keyup( function() {
	$( "div.parsed-expression-answer-type" ).each(function() {
	    var mathquill_box = $(this);

	    window.setTimeout( function() {
		var text = $(mathquill_box).children('.mathquill-editable').mathquill('latex');
		console.log( text );

		if (text.length > 0) {
		    var math = MathJax.Hub.getAllJax($(mathquill_box).children(".MathPreview")[0])[0];
		    try
		    {
			var latex = MathFunction.parse_tex(text).tex();
			MathJax.Hub.Queue(["Text",math,latex]);
			$(mathquill_box).children(".MathFunctionError").hide();
			$(mathquill_box).children(".MathPreview").show();
		    }
		    catch(err)
		    {
			$(mathquill_box).children(".MathFunctionError").show();
			$(mathquill_box).children(".MathPreview").hide();
		    }
		} else {
		    $(mathquill_box).children(".MathPreview").hide();
		}
	    }, 250 );
	});
    });
});






