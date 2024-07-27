const express = require('express');

const isAuthenticated = require('../Middlewares/isAuthenticated');
const isEnrolled = require('../Middlewares/isEnrolled');
const isAssignmentAuthor = require('../Middlewares/isAssignmentAuthor');
const isFull = require('../Middlewares/isFull');
const isNotYetOpenedEnroll = require('../Middlewares/isNotYetOpenedEnroll')
const isNotYetOpenedSubmission = require('../Middlewares/isNotYetOpenedSubmission')
const isPastDeadline = require('../Middlewares/isPastDeadline')
const router = express.Router({mergeParams: true})
const {enroll, getAllEvents, getEvent} = require('../Controllers/eventController');
const {submit, updateAssignment, checkExistingSubmission} = require('../Controllers/assignmentController');

router.get('/', getAllEvents);
router.post('/:id/enroll', isAuthenticated, isNotYetOpenedEnroll, isFull, enroll);
router.post('/:id/submit', isAuthenticated, isNotYetOpenedSubmission, isEnrolled, isPastDeadline, submit);
router.put('/:id/update', isAuthenticated, isAssignmentAuthor, updateAssignment);

router.get('/:id', getEvent);
router.get('/:id/submission', isAuthenticated, checkExistingSubmission);
module.exports = router;