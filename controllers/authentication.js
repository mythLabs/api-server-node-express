const User = require('../models/user');

exports.signup = function(req,res,next) {
    const email = req.body.email;
    const password= req.body.password;

    if (!email || !password) {
        return res.status(422).send({error: 'You must provide Email and Password'});
    }

    //See if user with email already exists
    User.findOne({email: email},function(err,existingUser){
        if (err) { return next(err)}

        if (existingUser) {
            return res.status(422).send({error: 'Email is already in use'});
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(function(err){
            if (err) { return next(err);}

            res.send({sucess: 'true'});
        });

    })

}