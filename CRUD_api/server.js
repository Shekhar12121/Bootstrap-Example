var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sports');      //sports as a dtabase_name
var Game = mongoose.model('Game',mongoose.Schema({    //
	name:String,
	age:String,
	batting:String,
	avgScore:String,
	salary:String
},{collection:'players'}));   //To prevent blank array, use here {collection : collection_name} under Schema() method  ...// when we use colectionname that time suddenly mongoose collect collection name as plural way. S prevent this we should use collectionname as collection_name. 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('client'));     /*We can use this approach also--> app.use(express.static( __dirname + '/client'))*/

app.get('/api/players',(req,res) =>  {
	Game.find((err,players) => {
		if(err)
			res.send(err)
		res.json(players);
	})
})

//get by id
app.get('/api/players/:id',(req,res) => {
	Game.findOne({_id:req.params.id},(err,players) => {
		 if(err)
		 res.send(err)
		res.json(players)

	});
});


app.post('/api/players',(req,res) => {
	Game.create(req.body, (err, players) => {
		if(err)
			res.send(err)
		res.json(players)
	});
});



app.delete('/api/players/:id', (req,res) => {
	Game.findOneAndRemove({_id:req.params.id}, (err,players) => {
       if(err)
       	res.send(err)
       res.json(players)
	})
})


app.put('/api/players/:id',(req,res) => {     
	  var query = {
          name: req.body.name,
	  	  age: req.body.age,
	  	  batting: req.body.batting,
	  	  avgScore: req.body.avgScore,
	  	  salary: req.body.salary
	  };
	Game.findOneAndUpdate({_id:req.params.id}, query, (err,players) => {
		 if(err)
		 res.send(err)
		res.json(players)

	});
});

app.listen(8080,() => {
	console.log('server listening 8080...')
})