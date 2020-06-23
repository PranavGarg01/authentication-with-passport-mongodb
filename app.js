const   express         = require('express'),
        app             = express(),
        bodyParser		= require('body-parser'),
		mongoose		= require('mongoose'),
		passport		= require('passport'),
		LocalStrategy	= require('passport-local'),
		User			= require('./models/user');

const 	signin		= require('./routes/signin'),
		register	= require('./routes/register'),
		index		= require('./routes/index'),
		home		= require('./routes/home'),
		admin		= require('./routes/admin');
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(signin);
app.use(register);
app.use(home);
app.use(admin);
app.use(index);

app.listen("3000",()=>{
	console.log("SERVER STARTED ON PORT 3000");
});
