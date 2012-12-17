var apiServer = "http://localhost:3000";
var Exercises = {
    reviewMode: false,
    practiceMode: true,
    currentCard: {},
    completeStack: {
	getUid: function() {
	    return -17;
	},
	getCustomStackID: function() {
	    return null;
	},
        length: function() {
	    return 1;
	}
    },
    incompleteStack: {
        length: function() {
	    return 1;
	}	
    }
};
