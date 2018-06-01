var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/office');
var Employee = mongoose.model('student', mongoose.Schema({
	name:String,
	password:String
},{collection: 'student'}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('client'));

//get all data
app.get('/api/student',(req,res) => {
	Employee.find((err,student) => {
		if(err)
			res.send(err)
		res.json(student)
	})
})

//post data to mongdb
app.post('/api/student',(req,res) => {
	Employee.create(req.body, (err,student) => {
		if(err)
			res.send(err)
		res.json(student)
	})
})


//connect to server
app.listen(8080,()=> {
	console.log('server listening on 8080d...')
})