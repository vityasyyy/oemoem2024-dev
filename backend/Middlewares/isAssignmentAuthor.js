const Assignment = require('../Models/assignments');
module.exports = async (req, res, next) => {
    try {
        const assignmentId = req.params.id;
        const userId = req.user._id;

        const assignment = await Assignment.findById(assignmentId);
        if (!assignment) {
            return res.status(404).json({ error: 'Assignment not found' });
        }

        if (assignment.submittedBy.toString() !== userId.toString()) {
            return res.status(403).json({ error: 'You are not authorized to edit this submission' });
        }

        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
