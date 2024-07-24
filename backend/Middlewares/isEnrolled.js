const Event = require('../Models/events')

module.exports = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const userId = req.user._id;

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const isUserEnrolled = event.enrolledBy.some(
            (enrolledUserId) => enrolledUserId.toString() === userId.toString()
        );

        if (!isUserEnrolled) {
            return res.status(403).json({ error: 'You are not enrolled in this event' });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

