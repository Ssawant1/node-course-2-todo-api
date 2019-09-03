var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express()
app.use(bodyParser.json());

app.post('/todos', function (req, res) {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(function (doc) {
        res.send(doc);
    }, function (err) {
        res.status(400).send(err);
    });

});

app.listen(3000, function () {
    console.log('Started on port 3000.')
})

//#region 
// var newTodo = new Todo({
//     text: "Cook dinner"
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// var otherTodo = new Todo({
//     text: 'Feed the cat'
//     , completed: true
//     , completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e);
// });


// var validCheckTodo = new Todo({
//     text: '    Edit this video    '
// });

// validCheckTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

// var user = new User({
//     email: 'shailesh@example.com'
// });

// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });
//#endregion