var express = require('express');
var app = express();
var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

//Routing
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

//Fire-up server
app.listen(port, function (err) {
    console.log('running server on port ' + port);
});