const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err) console.log(`Unable to connect to MongoDB server`);
    console.log(`Connected to MongoDB server`);

    //deleteMany:
    // db.collection('Todos').deleteMany({text:"Eat Lunch"}).then((result)=>{
    //     console.log(result);
    // }) ;


    //deleteOne, deletes first record which maches the criteria:
    // db.collection('Users').deleteOne({text: "Eat Lunch"}).then((result)=>{
    //     console.log(result);
    // });


    //findOneAndDelite, return deleted record to use it later...
    db.collection('Todos').findOneAndDelete({_id : new ObjectId("595ca30a73f0011ee8b0563c")}).then((result)=>{
        console.log(result);
    })

    // db.close();
});
