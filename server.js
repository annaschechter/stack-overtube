var app = require('express')();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var models = require('./models');
var fs = require('fs');
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var busboy = require('connect-busboy');
var s3 = require('s3-upload-stream')(new AWS.S3());
var keyName = "interface.js"


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(busboy());

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/upload', function(req, res) {
	console.log(req);
	var upload = s3.upload({ "Bucket": "annas-second-test-bucket", "Key": "testatest.txt"})
	req.pipe(upload);
});

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
	var questionReplies = models.Reply.find( {where: {QuestionId: id}} ).complete(function(err, reply) {
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