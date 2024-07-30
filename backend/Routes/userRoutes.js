const express = require('express');
const passport = require('passport');
const router = express.Router({mergeParams: true})
const {login, register, logout, validate, getEnrolledEvent} = require('../Controllers/userController');
const isAuthenticated = require('../Middlewares/isAuthenticated')
router.post('/register', register);
router.post('/login', login);
router.post('/logout', isAuthenticated, logout);
router.get('/validate', isAuthenticated ,validate);
router.get('/:id/enrolled', getEnrolledEvent);
module.exports = router;