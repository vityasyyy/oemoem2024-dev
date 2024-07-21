const express = require('express');

const isAuthenticated = require('../Middlewares/isAuthenticated');
const isEnrolled = require('../Middlewares/isEnrolled');
const isAssignmentAuthor = require('../Middlewares/isAssignmentAuthor');

const router = express.Router({mergeParams: true})
const {enroll} = require('../Controllers/eventController');
const {submit, updateAssignment} = require('../Controllers/assignmentController');

router.post('/:id/enroll', isAuthenticated, enroll);
router.post('/:id/submit', isAuthenticated, isEnrolled, submit);
router.put('/:id/update', isAuthenticated, isAssignmentAuthor, updateAssignment);

module.exports = router;