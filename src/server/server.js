var express = require('express');
var ReactEngine = require('react-engine');
var serveStatic = require('serve-static')
var path = require('path');
var app = express();
var engine = ReactEngine.server.create({});

app.engine('.jsx', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.set('view', require('react-engine/lib/expressView'));

app.get('/', function (req, res) {
  res.render('Default');
});

app.use(serveStatic(path.join(__dirname, '../../build')));

app.listen(3000, function () {
  console.log(__dirname)
  console.log('Example app listening on port 3000!');
});
