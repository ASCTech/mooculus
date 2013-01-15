(function() {

Khan.answerTypes = $.extend(Khan.answerTypes, {
    /*
     * text answer type
     *
     * Displays a simple text box, and performs direct string matching on the
     * value typed in an the answer provided
     */
    "function": {
        setup: function(solutionarea, solution) {
            // Add a text box
            var input = $('<input type="text">');
            $(solutionarea).append(input);

            // The fallback variable is used in place of the answer, if no
            // answer is provided (i.e. the field is left blank)
            var fallback = $(solution).data("fallback");

            return {
                validator: Khan.answerTypes.text.createValidator(solution),
                answer: function() {
                    // return the value in the text box, or the fallback
                    return input.val().length > 0 ?
                        input.val() :
                        (fallback ? fallback + "" : "");
                },
                solution: $.trim($(solution).text()),
                examples: [],
                showGuess: function(guess) {
                    input.val(guess === undefined ? "" : guess);
                }
            };
        },
        createValidator: function(solution) {
            var correct = $.trim($(solution).text());

            return function(guess) {
                guess = $.trim(guess);
                return correct === guess;
            };
        }
    },
