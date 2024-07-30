const Assignment = require('../Models/assignments');
const Event = require('../Models/events');
const User = require('../Models/users');

module.exports.submit = async (req, res) => {
    try {
        const { id: eventId } = req.params;
        const { assignmentLink, assignmentComment } = req.body;
        const userId = req.user._id;

        // Check if the user has already submitted an assignment for this event
        const existingAssignment = await Assignment.findOne({
            submittedBy: userId,
            submittedOn: eventId
        });

        if (existingAssignment) {
            return res.status(400).json({ error: 'You have already submitted an assignment for this event' });
        }

        // Create and save a new assignment
        const newAssignment = new Assignment({
            assignmentLink,
            assignmentComment,
            submittedBy: userId,
            submittedOn: eventId
        });

        await newAssignment.save();

        // Use Promise.all to fetch event and user concurrently
        const [event, user] = await Promise.all([
            Event.findById(eventId),
            User.findById(userId)
        ]);

        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update event and user assignments lists
        event.assignments.push(newAssignment._id);
        user.assignment.push(newAssignment._id); // Correct field name

        await Promise.all([event.save(), user.save()]);

        res.status(200).json({ message: 'Assignment submitted successfully', assignment: newAssignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.updateAssignment = async (req, res) => {
    try {
        const { id: assignmentId } = req.params;
        const { assignmentLink, assignmentComment } = req.body;
        const userId = req.user._id;
        // Find the assignment by ID
        const assignment = await Assignment.findById(assignmentId);

        if (!assignment) {
            return res.status(404).json({ error: 'Assignment not found' });
        }

        // Check if the assignment was submitted by the current user
        if (assignment.submittedBy.toString() !== userId.toString()) {
            return res.status(403).json({ error: 'Unauthorized action' });
        }

        // Update the assignment details
        assignment.assignmentLink = assignmentLink || assignment.assignmentLink;
        assignment.assignmentComment = assignmentComment || assignment.assignmentComment;

        // Save the updated assignment
        await assignment.save();

        res.status(200).json({ message: 'Assignment updated successfully', assignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.checkExistingSubmission = async (req, res) => {
    try {
        const { id: eventId } = req.params;
        const userId = req.user._id;

        // Find the assignment for this user and event
        const assignment = await Assignment.findOne({
            submittedBy: userId,
            submittedOn: eventId
        });

        if (assignment) {
            res.status(200).json({
                message: 'Existing assignment found',
                assignment: {
                    _id: assignment._id,
                    assignmentLink: assignment.assignmentLink,
                    assignmentComment: assignment.assignmentComment
                }
            });
        } else {
            res.status(200).json({
                message: 'No existing assignment found',
                assignment: null
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
