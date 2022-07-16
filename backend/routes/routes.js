const express = require("express");
const router = express.Router();
const passport = require('passport')
const {
    allbooks,
    postbook,
    idbook,
    updatebook,
} = require('../controllers/books');
const {
    register,
    login,
    idUser,
    allUsers
} = require('../controllers/user');

passportAu = passport.authenticate('jwt', { session: false })


router.route('/allbooks').get(passportAu,allbooks).post( passportAu ,postbook);
router.route('/allbooks/:id').get(passportAu,idbook).put(passportAu,updatebook);
router.route('/user/login').post(login);
router.route('/user/register').post(register);
router.route('/user/').get(passportAu, allUsers);
router.route('/user/:id').get(passportAu, idUser);

module.exports = router 