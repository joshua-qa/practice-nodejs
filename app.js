var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.send('Hello page');
});
app.get('/login', function(req, res) {
    res.send('Login please');
});
app.get('/sagiri', function(req, res) {
    res.send('<h2>Kawaii</h2>');
});
app.listen(3000, function() {
    console.log('Connected 3000 port!');
});