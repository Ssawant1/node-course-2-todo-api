const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
    'mongodb+srv://mgtest:mgtest123@cluster0-w5i3r.mongodb.net/test?retryWrites=false&w=majority'
    , function (err, client) {
        if (err) {
            console.log('Unable to connect to MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // //deleteMany 
        // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
        //     console.log(result);
        // }).catch(function (err) {
        //     console.log(err);
        // });

        // //deleteOne 
        // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
        //     console.log(result);
        // }).catch(function (err) {
        //     console.log(err);
        // });

        // //findOneAndDelete 
        // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        //     console.log(result);
        // }).catch(function (err) {
        //     console.log(err);
        // });

        //Users DeleteMany
        db.collection('Users').deleteMany({ name: "Shailesh" }).then(function (result) {
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });

        //User findOneAndDelete
        db.collection('Users').findOneAndDelete({ _id: new ObjectID('5d6e44151c9d4400006e6f7c') }).then(function (result) {
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });

        //client.close();
    }
);