const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users');

const eventsSchema = new Schema({
    title: String,
    description: String,
    location: String,
    contactPerson: String,
    prerequisite: String,
    slots: Number,
    date: Date,
    groupChat: String,
    mentors: String,
    curriculum: String,
    assignments: [
        {
            assignmentLink: String,
            assignmentComment: String
        }
    ],
    submittedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
})

module.exports = mongoose.model('Event', eventsSchema);