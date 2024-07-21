const Assignment = require('../Models/assignments');
const Event = require('../Models/events');
const User = require('../Models/users');

module.exports.submit = async (req, res) => {
    try {
        const eventId = req.params.id;
        const { assignmentLink, assignmentComment } = req.body;
        const userId = req.user._id;

        // Create a new assignment
        const newAssignment = new Assignment({
            assignmentLink,
            assignmentComment,
            submittedBy: userId
        });

        // Save the new assignment
        await newAssignment.save();

        // Retrieve the event from the database
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        // Add the assignment to the event's assignments list
        event.assignments.push(newAssignment._id);
        await event.save();

        // Retrieve the user from the database
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Add the assignment to the user's assignments list
        user.assignments.push(newAssignment._id);
        await user.save();

        res.status(200).json({ message: 'Assignment submitted successfully', assignment: newAssignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.updateAssignment = async (req, res) => {
    try {
        const assignmentId = req.params.id;
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

