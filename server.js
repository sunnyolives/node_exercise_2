// an express application
/* Extend the previous endpoint to take an optional url parameter.

if the request contains a parameter then the returned greeting should reflect this. (i.e Hello Christian as apposed to just Hello)  */

const url = require('url');
const express = require('express' );
const app = express();
const bodyParser = require('body-parser');

let	greetingsArray = ['Godt århundre', 'Vær fortapt', 'Vel omkommet'];

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function () {
  console.log('Node express app started at port ' + app.get('port'));
});

app.use(express.static('public'));

app.get('/hilsen', function (req, res) {
	const tilfeldigIndeks = Math.floor(Math.random()*greetingsArray.length);
	let name = req.query.name;
	let greeting = greetingsArray[tilfeldigIndeks];
	res.send(JSON.stringify(`${greeting}, ${name}`)); 
	console.log(greeting);
});



