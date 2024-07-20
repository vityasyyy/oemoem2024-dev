const express = require('express');
const isAuthenticated = require('../Middlewares/isAuthenticated');

const router = express.Router({mergeParams: true})
const {enroll} = require('../Controllers/eventController');
const {submit} = require('../Controllers/assignmentController');

router.post('/:id/enroll', isAuthenticated, enroll);
router.post('/:id/submit', submit);

module.exports = router;