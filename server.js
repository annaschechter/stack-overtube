var app = require('express')();
var server = require('http').createServer(app);
var Question = require('./models/question.js');
var bodyParser = require('body-parser');
var models = require('./models');
var fs = require('fs');
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var busboy = require('connect-busboy');

// Create an S3 client
var s3 = new AWS.S3();
var keyName = "interface.js"

// Create a bucket and upload something into it
var params = { Bucket: 'annas-second-test-bucket',  Key: 'pablofile.txt'}




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(busboy());

app.get('/', function(req, res) {
	res.render('index');
})

app.post('/upload', function(req, res) {
	var fstream;
	console.log(req.busboy);
	// var file = file.createWriteSteam(req.busboy)
	req.pipe(req.busboy);
	req.busboy.on('file', function(fieldname, file, filename) {
		console.log("uploading: "+filename)
		fstream = fs.createWriteStream(__dirname + '/views/' + filename);
		file.pipe(fstream);
		fstream.on('close', function() {
			console.log("Its done")
		});
	});
	console.log("this is our root:"+__dirname + '/views/' + 'interface.js')

	var amazon = fs.createWriteStream(__dirname + '/views/' + 'index.ejs');
	s3.putObject(params).createReadStream().pipe(amazon);
	console.log(amazon);

		// s3.createBucket({Bucket: bucketName}, function() {
		//   var params = {Bucket: bucketName, Key: keyName};
		//   s3.putObject(params, function(err, data) {
		//     if (err)
		//       console.log(err)
		//     else
		//       console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
		//   });
		// });

})

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