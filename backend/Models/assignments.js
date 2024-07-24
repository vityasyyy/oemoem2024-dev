const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    assignmentLink: String,
    assignmentComment: String,
    submittedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    submittedOn: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    }
})

module.exports = mongoose.model('Assignment', assignmentSchema);