var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.get('/foo', function (req, res) {
    res.send('hi');
})

app.listen(3000, function () {
    console.log('Running server on 3000...');
});