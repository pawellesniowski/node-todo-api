const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//mongoose model2:
// var User = mongoose.model('Users', {
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }
// });



// // adding:

// var user = new User({
//     email: "pawel.html@gmail.com  "
// });

// // saving:
// user.save().then((doc)=>{
//     console.log(" to jest nowy doc", doc);
// }, (e)=>{
//     console.log(" to jest error");
// });
