var app = require('express')();
var server = require('http').createServer(app);
var Question = require('./models/question.js');
var bodyParser = require('body-parser');
var models = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/askquestion', function(req, res) {
	var question = req.body;
		console.log(req.body);
	models.Question.create({ title: question.title, description: question.description, codeSnippet: question.codeSnippet, githubRepo: question.githubRepo });
});

app.get('/question/:id', function(req, res) {
	var id = req.url.toString().split('/').slice(-1)[0];
	console.log(id);
	var currentQuestion = models.Question.find( {where:{id: id}} ).complete(function(err, question) {
		console.log(question.title);
		console.log(question.description);
	});
});

module.exports = app