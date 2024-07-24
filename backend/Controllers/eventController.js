const User = require('../Models/users');
const Event = require('../Models/events');

module.exports.enroll = async (req, res) => {
    try {
        const eventId = req.params.id;
        const userId = req.user._id;

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        if (event.enrolledBy.includes(userId)) {
            return res.status(400).json({ error: 'User already enrolled' });
        }

        if (event.slots <= 0) {
            return res.status(400).json({ error: 'No slots available' });
        }

        // Enroll the user in the event
        event.enrolledBy.push(userId);
        event.slots -= 1; // Subtract one slot
        await event.save();

        // Add the event to the user's enrolledTo list
        const user = await User.findById(userId);
        user.enrolledTo.push(eventId);
        await user.save();

        res.status(200).json({ message: 'User enrolled successfully', event });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single event
module.exports.getEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId)
            .populate('enrolledBy', 'username email')
            .populate('assignments');

        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};