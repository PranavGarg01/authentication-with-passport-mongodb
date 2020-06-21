const   express         = require('express'),
        app             = express(),
        bodyParser		= require('body-parser'),
		mongoose		= require('mongoose'),
		session			= require('express-session'),
		passport		= require('passport'),
		local			= require('passport-local');

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.get('/',(req,res)=>{
	res.render('index');
});

app.listen("3000",()=>{
	console.log("SERVER STARTED ON PORT 3000");
});
