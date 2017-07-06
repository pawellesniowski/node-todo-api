// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    //add some data to DB:
    // db.collection('Todos').insertOne({
    //     text: 'at least 3 fat algorithm',
    //     completed: false
    // }, (err, result)=>{
    //     if (err){
    //         return console.log('Unable to insert to do ');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
 
    db.close();
});