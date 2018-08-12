var express = require('express'),
  app = express(),
  todoRoutes = require('./routes/todos'),
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/todo', todoRoutes);

app.get('/', function(req, res) {
  res.send('root route');
});
app.listen(3000, function() {
  console.log('Express listening', this.address().port);
  console.log('http://localhost:3000/');
});
