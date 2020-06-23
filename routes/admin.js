const   Users   = require('../models/user'),
        express = require('express'),
        router  = express.Router();

router.get('/admin',(req,res)=>{
    res.render('admin');
});

router.get('/admin/mydata',(req,res)=>{
    Users.find({},(err,users)=>{
        if(!err){
            console.log(users);
            res.send(users);
        }
        else {
            console.log(err);
        }
    });
    
});

module.exports = router;