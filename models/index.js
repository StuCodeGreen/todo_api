var mongoose = require('mongoose'),
url = process.env.DATABASE || "mongodb://localhost:27017/todo_api"
mongoose.set('debug', true);
mongoose.connect(
  url,
  { useNewUrlParser: true }
);

mongoose.Promise = Promise;
module.exports.Todo = require('./todo');
