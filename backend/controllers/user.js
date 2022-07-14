const mongoose = require('mongoose');
   
const User = mongoose.model('User');
const passport = require('passport');
const utils = require('../lib/utils');
const login = (req, res, next) =>{
    User.findOne({ username: req.body.username })
    .then((user) => {

        if (!user) {
            return res.status(401).json({ success: false, msg: "could not find user" });
        }
        
        // Function defined at bottom of app.js
        const isValid = utils.validPassword(req.body.password, user.hash, user.salt);
        
        if (isValid) {

            const tokenObject = utils.issueJWT(user);

            res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });

        } else {

            res.status(401).json({ success: false, msg: "you entered the wrong password" });

        }

    })
    .catch((err) => {
        next(err);
    });
}

const register = (req, res) =>{

    exist = utils.UserExist(User,req)


    if (!exist) {

        res.status(401).json({ success: false, msg: "username already exist" });

        } else {

        const saltHash = utils.genPassword(req.body.password);
        
        const salt = saltHash.salt;
        const hash = saltHash.hash;

        const newUser = new User({
            username: req.body.username,
            hash: hash,
            salt: salt
        });

        try {
        
            newUser.save()
                .then((user) => {
                    res.json({ success: true, user: user });
                });

        } catch (err) {

            res.json({ success: false, msg: err });
    }
}};



module.exports = {
    register,
    login
}

