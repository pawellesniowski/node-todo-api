const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //find one and delete:
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("595ca409aeec4514e470fe0d")
    }, {
        $set:{
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("595ca6c48efdc90c30f0dbec")
    },{
         $set:{
             name: "Paweł"
            },
        $inc:{
            age: 1
        },
        $currentDate: { 
            time: true
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });


    db.close();
});