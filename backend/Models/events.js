const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: String,
    filename: String
})
imageSchema.virtual('thumbnail').get(function() {
    return this.url.replace('/upload', '/upload/w_200')
})

const eventsSchema = new Schema({
    title: String,
    description: String,
    location: String,
    contactPerson: String,
    prerequisite: String,
    slots: Number,
    date: Date,
    deadline: Date,
    groupChat: String,
    mentors: String,
    curriculum: String,
    assignments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Assignment"
        }
    ],
    enrolledBy: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    image: imageSchema,
    imageWarna: imageSchema,
    shape: imageSchema,
    color: String
})

module.exports = mongoose.model('Event', eventsSchema);

