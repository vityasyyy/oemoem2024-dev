const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: String,
    filename: String
})
imageSchema.virtual('thumbnail').get(function() {
    return this.url.replace('/upload', '/upload/w_200')
})

const contactPersonSchema = new Schema({
    namaCP: String,
    linkCP: String
});

const mentorSchema = new Schema({
    namaMentor: String,
    gambarMentor: imageSchema,
    divisiMentor: String,
    tahunAjaran: String
});

const eventsSchema = new Schema({
    title: String,
    assignmentDetail: String,
    description: String,
    location: String,
    contactPerson: contactPersonSchema,
    prerequisite: String,
    slots: Number,
    openAssignment: Date,
    date: Date,
    deadline: Date,
    groupChat: String,
    mentors: mentorSchema,
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

