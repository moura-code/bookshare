const express = require("express");
const router = express.Router();
const {
    allbooks,
    postbook,
} = require('../controllers/books')

router.route('/allbooks').get(allbooks).post(postbook)

module.exports = router