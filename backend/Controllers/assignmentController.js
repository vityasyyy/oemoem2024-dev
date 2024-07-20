const Assignment = require('../Models/assignments');
const Event = require('../Models/events');

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

        res.status(200).json({ message: 'Assignment submitted successfully', assignment: newAssignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
