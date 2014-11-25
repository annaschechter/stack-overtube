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

module.exports = app