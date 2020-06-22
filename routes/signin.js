const User = require('../models/user');

const   express     = require('express'),
        passport    = require("passport"),
        router      = express.Router();


router.get('/signin',(req,res)=>{
    res.render('signin');
});
router.post('/signin',passport.authenticate('local'),(req,res)=>{
    res.redirect('/home')
});
module.exports = router;
