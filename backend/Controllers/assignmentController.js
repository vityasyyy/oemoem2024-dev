const Assignment = require('../Models/assignments');
const Event = require('../Models/events');

module.exports.submit = async (req, res) => {
    try{
        const eventId = req.params.id;
        const assignmentId = req.assignment._id;

        // Add the assignment to the event's assignments list
        const event = await Event.findById(eventId);
        event.assignments.push(assignmentId);
        await event.save();

        res.status(200).json({ message: 'Assignment submitted successfully', assignment});
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
};
