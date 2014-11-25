var app = require('express')();
var server = require('http').createServer(app);
var Question = require('./models/question.js');
var bodyParser = require('body-parser');
var models = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

app.post('/askquestion', function(req, res) {
	var question = req.body;
		console.log(req.body);
	models.Question.create({ title: question.title, description: question.description, codeSnippet: question.codeSnippet, githubRepo: question.githubRepo, votes: question.votes });
});

app.get('/question/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	var currentQuestion = models.Question.find( {where:{id: id}} ).complete(function(err, question) {
		console.log(question.title);
		console.log(question.description);
	});
	var questionReplies = models.Reply.find( {where: {questionId: id}} ).complete(function(err, reply) {
		console.log(reply.link);
	});

});

app.post('/postreply/:id', function(req, res) {
	var id = req.params.id;
	var reply = models.Reply.create({ link: req.body.link, QuestionId: id }).complete(function(err, reply) {
		console.log(reply.link);
	});

});

module.exports = app