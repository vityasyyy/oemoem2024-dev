const express = require('express');
const isAuthenticated = require('../Middlewares/isAuthenticated');

const router = express.Router({mergeParams: true})
const {enroll} = require('../Controllers/eventController');
const {submit, updateAssignment} = require('../Controllers/assignmentController');

router.post('/:id/enroll', isAuthenticated, enroll);
router.post('/:id/submit', isAuthenticated, submit);
router.put('/:id/update', updateAssignment)

module.exports = router;