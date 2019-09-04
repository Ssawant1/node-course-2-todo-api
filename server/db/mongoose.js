var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mgtest:mgtest123@cluster0-shard-00-00-w5i3r.mongodb.net:27017,cluster0-shard-00-01-w5i3r.mongodb.net:27017,cluster0-shard-00-02-w5i3r.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=false&w=majority');

module.exports = {
    mongoose: mongoose
};
