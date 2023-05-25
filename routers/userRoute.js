const express = require('express');
const router = express.Router();
const {Login} = require('../controllers/userController');


router.route('/').get(Login);

module.exports = router;