const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { ObjectID } = require('mongodb');
const { User } = require('../server/models/user');

var id = '7d6ea578602fc41c9ce1becc';

if (!ObjectID.isValid(id)) {
   console.log('Invalid ID');
}

//find
Todo.find({
   _id: id
}).then((todos) => {
   console.log('Todos', todos);
}).catch(function (err) {
   console.log(err);
});

//findOne
Todo.findOne({
   _id: id
   //_id: '5d6f6c538eab362570552746'
   //completed:false
}).then((todo) => {
   if (!todo) {
      return console.log('Id not found');
   }
   console.log('Todo', todo);
}).catch(function (err) {
   console.log(err);
});

//findById
Todo.findById(id).then((todo) => {
   if (!todo) {
      return console.log('Id not found');
   }
   console.log('Todo find by id ', todo);
}).catch(function (err) {
   console.log(err);
});

User.findById(id).then((user) => {
   if (!user) {
      return console.log('User not found.');
   }
   console.log('User details ', user);
}).catch((err) => {
   console.log(err);
});