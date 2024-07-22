const express = require('express');
const passport = require('passport');
const router = express.Router({mergeParams: true})
const {login, register, logout, validate} = require('../Controllers/userController');

router.post('/register', register);
router.post('/login', passport.authenticate('local'),login);
router.post('/logout', logout);
router.get('/validate', validate);

module.exports = router;