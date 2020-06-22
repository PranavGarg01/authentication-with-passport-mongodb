const   express = require('express'),
        router  = express.Router(),
        mw      = require('../middleware');
router.use('/home',mw.isLoggedIn);
router.get('/home',(req,res)=>{
    var message="";
    if(req.session.changepass == 1){
        message = "Your password has been successfully changed";
        req.session.changepass = null;
    }
    else if(req.session.changepass == 0)
    {
        message = "Your password was not changed";
        req.session.changepass = null;
    }
    res.render('home',{user:req.user,message: message});
});

router.get('/home/logout',(req,res)=>{
    console.log("before logout " + req.user);
    req.logout();
    console.log("affter logout" + req.user);
    res.redirect('/');
});

router.get('/home/changePass',(req,res)=>{
    res.render('changePass');
});
router.post('/home/changePass',(req,res)=>{
    
    req.user.changePassword(req.body.oldpass,req.body.newpass,(err)=>{
        console.log(err);
        req.session.changepass = 0;
        if(!err){
            // req.user.password = req.body.newpass;
            // req.user.save();
            req.session.changepass = 1;
        }
        
        res.redirect('/home');
    })
});
module.exports = router;