const express = require("express");
const router = express.Router();
const {
    allbooks,
    postbook,
} = require('../controllers/books');
const {
    register,
    login
} = require('../controllers/user');

router.route('/allbooks').get(allbooks).post(postbook);
router.route('/user/login').post(login);
router.route('/user/register').post(register);

module.exports = router