const   express = require('express'),
        router  = express.Router();

router.get('/',(req,res)=>{
    console.log(req.user);
    res.render('index');    
});

module.exports = router;
