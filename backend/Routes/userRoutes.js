const express = require('express');
const passport = require('passport');
const router = express.Router({mergeParams: true})
const {login, register, logout} = require('../Controllers/userController');

router.post('/register', register);
router.post('/login', passport.authenticate('local'),login);
router.post('/logout', logout);

module.exports = router;