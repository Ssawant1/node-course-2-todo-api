const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
    'mongodb+srv://mgtest:mgtest123@cluster0-w5i3r.mongodb.net/test?retryWrites=true&w=majority'
    , function (err, client) {
        if (err) {
            console.log('Unable to connect to MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        db.collection('Todos').find({ _id: new ObjectID('5d6e14c69057a23fa07963bc') }).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });

        db.collection('Todos').find().count().then((count) => {
            console.log('Todos Count');
            console.log(`Todos count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch todos count', err);
        });

        db.collection('Users').find({ name: "Shailesh" }).toArray().then(function (doc) {
            console.log('Users');
            console.log(JSON.stringify(doc, undefined, 2));
        }).catch(function (err) {
            console.log('Unable to fetch Users', err);
        });

        db.collection('Users').count().then(function (count) {
            console.log(`User Count`);
            console.log(`User Count is ${count}`);
        }).catch(function(err){
            console.log('Unable to fetch Users count', err);
        })

        //client.close();
    }
);