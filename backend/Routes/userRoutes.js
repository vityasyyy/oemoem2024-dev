const express = require('express');
const passport = require('passport');
const router = express.Router({mergeParams: true})
const {login, register, logout, validate, getEnrolledEvent} = require('../Controllers/userController');

router.post('/register', register);
router.post('/login', passport.authenticate('local', {session:true}),login);
router.post('/logout', logout);
router.get('/validate', validate);
router.get('/:id/enrolled', getEnrolledEvent);
module.exports = router;