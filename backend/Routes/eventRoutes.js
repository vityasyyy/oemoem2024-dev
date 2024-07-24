const express = require('express');

const isAuthenticated = require('../Middlewares/isAuthenticated');
const isEnrolled = require('../Middlewares/isEnrolled');
const isAssignmentAuthor = require('../Middlewares/isAssignmentAuthor');

const router = express.Router({mergeParams: true})
const {enroll, getAllEvents, getEvent} = require('../Controllers/eventController');
const {submit, updateAssignment, checkExistingSubmission} = require('../Controllers/assignmentController');

router.get('/', getAllEvents);
router.post('/:id/enroll', isAuthenticated, enroll);
router.post('/:id/submit', isAuthenticated, isEnrolled, submit);
router.put('/:id/update', isAuthenticated, isAssignmentAuthor, updateAssignment);

router.get('/:id', getEvent);
router.get('/:id/submission', isAuthenticated, checkExistingSubmission);
module.exports = router;