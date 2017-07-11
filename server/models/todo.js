var mongoose = require('mongoose');

// mongoose mnodel:
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    complited: {
        type: Boolean,
        default: false
    }, 
    complitedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

