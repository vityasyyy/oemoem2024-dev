const User = require('../Models/users');
const Event = require('../Models/events');

module.exports.enroll = async (req, res) => {
    try {
        const { id: eventId } = req.params;
        const userId = req.user._id;

        // Fetch event and user concurrently
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

        if (event.enrolledBy.includes(userId)) {
            return res.status(400).json({ error: 'User already enrolled' });
        }

        if (event.slots <= 0) {
            return res.status(400).json({ error: 'No slots available' });
        }

        // Enroll user in the event and update slots
        event.enrolledBy.push(userId);
        event.slots -= 1;

        // Add event to user's enrolled list
        user.enrolledTo.push(eventId);

        // Save both event and user
        await Promise.all([event.save(), user.save()]);

        res.status(200).json({ message: 'User enrolled successfully', event });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while enrolling user: ' + error.message });
    }
};

module.exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({})
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching events: ' + error.message });
    }
};

module.exports.getEvent = async (req, res) => {
    try {
        const { id: eventId } = req.params;

        // Populate related fields
        const event = await Event.findById(eventId)
            .populate('enrolledBy', 'username email')
            .populate('assignments');

        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the event: ' + error.message });
    }
};
