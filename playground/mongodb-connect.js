//const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb+srv://mgtest:mgtest123@cluster0-w5i3r.mongodb.net/test?retryWrites=true&w=majority', function (err, client) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    /* db.collection('Todos').insertOne({ text: 'Something to do', completed: false }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */


    // db.collection('Users').insertOne({
    //     name: 'Shreya'
    //     , age: 30
    //     , location: 'Mumbai'
    // }, function (err, result) {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id);
    // });
    client.close();
});

