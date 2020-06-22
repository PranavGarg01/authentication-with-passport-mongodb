const User = require('../models/user');

const   express     = require('express'),
        passport    = require("passport"),
        router      = express.Router();

router.get('/register',(req,res)=>{
    res.render('register');
});
router.post('/register',(req,res)=>{
    var newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    User.register(newUser,req.body.password,(err,user)=>{
        if(err){
            console.log("cant register new user" + err.message);
            return res.render('register');
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect('/home');
        });
       
    });
})
module.exports = router;
