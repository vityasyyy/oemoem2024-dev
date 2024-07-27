const Event = require('../Models/events');

module.exports = async (req, res, next) => {
    try{
        const event = await Event.findById(req.params._id);

        if(!event) return res.status(404).json({message: "Event not found"});

        if (event.slots <= event.enrolledBy.length) {
            return res.status(400).json({ message: 'Class is full' });
          }
      
        next();      
    } catch (error) {
        console.error('Error checking if class is full:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}