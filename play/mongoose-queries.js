const {ObjectID} = require('mongodb');
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {Users} = require("./../server/models/users");

var id = '';

if (!ObjectID.isValid(id)){
    return console.log('ID not valid');
}; 
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if (!todo) return console.log('Id not found');
//     console.log('Todo by id: ', todo);
// }).catch((e)=> console.log("error"));

Users.findById(id).then((user)=>{
    if (!user) console.log('user not found');
    console.log('User found: ', JSON.stringify(user, undefined, 3));
},(e)=>{
    console.log("error: ");
});




