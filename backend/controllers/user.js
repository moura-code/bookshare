const mongoose = require('mongoose');
const LogOut = require('express-passport-logout');
const User = mongoose.model('User');
const passport = require('passport');
const utils = require('../lib/utils');
const login = (req, res, next) =>{
    User.findOne({ username: req.body.username })
    .then((user) => {

        if (!user) {
            return res.status(401).json({ success: false, msg: "Could not find user" });
        }
        
        // Function defined at bottom of app.js
        const isValid = utils.validPassword(req.body.password, user.hash, user.salt);
        
        if (isValid) {

            const tokenObject = utils.issueJWT(user);

            res.status(200).json({ success: true, user:user._id ,token: tokenObject.token, expiresIn: tokenObject.expires });

        } else {

            res.status(401).json({ success: false, msg: "You entered the wrong password" });

        }

    })
    .catch((err) => {
        next(err);
    });
}

const register = async (req, res) =>{
    if (req.body.password){
    exist =  await utils.UserExist(User,req)
    

    if (exist === null) {

        const saltHash = utils.genPassword(req.body.password);
         
        const salt = saltHash.salt;
        const hash = saltHash.hash;
        
        try { 
        const newUser = new User({
            username: req.body.username,
            hash: hash,
            salt: salt
        }) 
        try { 
            await newUser.save()
                .then((user) => {
                    const tokenObject = utils.issueJWT(user);
                    res.status(201).json({ success: true, user:user._id ,token: tokenObject.token, expiresIn: tokenObject.expires });
                })
        } catch (err) {
           
            res.status(401).json({ success: false, msg: 'Username too short' });
    };}catch(err){
        
            res.json({ success: false, msg: err });
        }

        
        

        } else {
            res.status(401).json({ success: false, msg: "Username already exist" });
}}else{
    res.status(401).json({ success: false, msg: "Please enter a passoword" });
}};


const allUsers = async(req,res)=>{
    try{
    all = await User.find()
    res.status(200).json({sucess:true, all })
    }catch(err){
        res.status(401).json({sucess:false, err })
    }
}
const idUser = async (req,res)=>{
    try{

        const id = await User.findById(req.params.id)

        if ( id ) {
             res.json({sucess:true, id})
            }else{res.json({sucess:false , msg:'Id incorect'})}

        }catch(err){
            res.json({ message: err })
        }
}

module.exports = {
    register,
    login, 
    idUser,
    allUsers,
   
}

