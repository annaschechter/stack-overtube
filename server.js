var app = require('express')();
var server = require('http').createServer(app);


app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');


app.get('/', function(req, res) {
	res.send('<h1>StackOverTube</h1>')
})

module.exports = app