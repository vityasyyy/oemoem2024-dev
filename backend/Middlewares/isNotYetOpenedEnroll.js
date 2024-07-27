const Event = require('../Models/events');

module.exports = async (req, res, next) => {
    try {
      const event = await Event.findById(req.params.id);
  
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      const currentDate = new Date();
      if (currentDate < new Date(event.date)) {
        return res.status(400).json({ message: 'Enrollment has not yet opened' });
      }
  
      next();
    } catch (error) {
      console.error('Error checking enrollment start date:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  