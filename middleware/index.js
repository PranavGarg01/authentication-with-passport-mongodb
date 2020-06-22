var mw = {};

mw.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else {
        res.redirect('/signin');
    }
}

module.exports = mw;