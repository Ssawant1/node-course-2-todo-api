const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
    'mongodb+srv://mgtest:mgtest123@cluster0-w5i3r.mongodb.net/test?retryWrites=false&w=majority'
    , function (err, client) {
        if (err) {
            console.log('Unable to connect to MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        //findOneAndUpdate Todos
        db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID('5d6e28801c9d4400006e6f72')
        }, {
                $set: {
                    completed: true
                }
            }, {
                returnOriginal: false
            }).then((result) => {
                console.log(result);
            }).catch(function (err) {
                console.log(err);
            });

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5d6e27b9895cf73f582e5483')
        }, {
                $set: {
                    name: 'Shailesh'
                },
                $inc: {
                    age: 1
                }
            }, {
                returnOriginal: false
            }).then((result) => {
                console.log(result);
            });

        //client.close();
    }
);