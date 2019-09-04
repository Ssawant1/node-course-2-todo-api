const expect = require('expect');
const request = require('supertest');

var { app } = require('./../server');
var { Todo } = require('../models/todo');

const todos = [{ text: 'First test todo' }, { text: 'Second test todo' }];

beforeEach((done) => {
    Todo.remove({}).then(function () {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    //console.log('error');
                    return done(err);
                }

                Todo.find({ text }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create todo with invalid body data', function (done) {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            })
    });

});

describe('GET /todos', () => { 
    it('should get all todos', (done) => { 
      request(app) 
      .get('/todos') 
      .expect(200)
      .expect(function(res){
          expect(res.body.todos.length).toBe(2);
      })
      .end(done);
    }); 
  });