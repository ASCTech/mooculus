(function() {

$.extend(Khan.answerTypes, {
    expression: function(solutionarea, solution, fallback, verifier, input) {

        if (!input) {
            input = $('<input type="text">');
        }

        $(solutionarea).append(input);

	var mirror = $('<p>Hello</p>');
        $(solutionarea).append(mirror);

	$(input).bind("propertychange keyup input paste", function(event) {
	    var value = $(this).val();
	    var parsed_value = parser.Parser(value);
	    mirror.text( parsed_value[1] );
	});

        var correct = typeof solution === "object" ? $(solution).text() : solution;

        if (verifier == null) {
            verifier = function(correct, guess) {
                correct = $.trim(correct);
                guess = $.trim(guess);
                return correct === guess;
            };
        }

        var ret = function() {
            // we want the normal input if it's nonempty, the fallback converted to a string if
            // the input is empty and a fallback exists, and the empty string if the input
            // is empty and the fallback doesn't exist.
            var val = input.val().length > 0 ?
                input.val() :
                (typeof fallback !== "undefined") ?
                    fallback + "" :
                    "";

            ret.guess = input.val();

            return verifier(correct, val);
        };
        ret.solution = $.trim(correct);
        ret.examples = verifier.examples || [];
        ret.showGuess = function(guess) {
            input.val(guess);
        };
        return ret;
    },

});

})();
