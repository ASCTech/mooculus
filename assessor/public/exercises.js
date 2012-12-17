var Exercises = {
    practiceMode: true,
    reviewMode: false,
    readOnly:false
};

Exercises.currentCard = {
    exerciseName: 'point_slope_form'
};

Exercises.topic = {
    id: ''
};

Exercises.incompleteStack = {
    length: 0
};

Exercises.completeStack = {
    length: 0,
    getUid: function() {
        return -1
    },
    getCustomStackID: function() {
        return -1
    }
};

var userExercise = {
    current: true,
    exerciseModel: {},
    readOnly: false,
    userActivity: null,
};