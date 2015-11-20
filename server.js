var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.listen(8800);
var messages = [];

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
  res.json(messages)
});

app.post('/', function(req, res) {
  messages.push({
    message: req.body.message,
    time: new Date(),
  });
  res.json(messages)
});

app.options('/', function(req, res) {
  res.end()
});
