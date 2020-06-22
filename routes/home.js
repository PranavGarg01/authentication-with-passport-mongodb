const   express = require('express'),
        router  = express.Router(),
        mw      = require('../middleware');

router.get('/home',mw.isLoggedIn,(req,res)=>{
    res.render('home',{user:req.user});
});

module.exports = router;