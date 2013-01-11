//var apiServer = "https://mooculus.osu.edu";
var apiServer = document.location.protocol + "//" + document.location.host;

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
