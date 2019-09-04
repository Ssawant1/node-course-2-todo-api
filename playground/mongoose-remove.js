const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

var id = '5d6fa65831abf636a884e60b';
Todo.findByIdAndRemove(id).then((todo) => {
    console.log(todo);
}).catch((err) => {
    console.log(err);
});