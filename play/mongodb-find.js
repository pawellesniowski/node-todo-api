const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err) return console.log("Unable to connect to MongoDB server");
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 3));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID("595ca409aeec4514e470fe0d")
    // }).toArray().then((docs)=>{
    //     console.log(('Todos by ID'));
    //     console.log(JSON.stringify(docs, undefined, 3));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: "Pawel"
    }).toArray().then((docs)=>{
        console.log('Todos by name');
        console.log(JSON.stringify(docs[0].name, undefined, 3));
    }, (err)=>{
        console.log('Unable to fetch todos', err)
    });


    db.close();
});
