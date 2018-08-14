var express = require('express'),
  app = express(),
  todoRoutes = require('./routes/todos'),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use('/api/todo', todoRoutes);

app.get('/', function(req, res) {
  res.sendFile('index.html');
});
app.listen(port, function() {
  console.log('Express listening', 'http://localhost:' +this.address().port);

});
