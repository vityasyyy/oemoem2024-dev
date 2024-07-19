const express = require('express');
const isAuthenticated = require('../Middlewares/isAuthenticated');

const router = express.Router({mergeParams: true})
const {enroll} = require('../Controllers/eventController');

router.post('/:id/enroll', isAuthenticated, enroll);

module.exports = router;