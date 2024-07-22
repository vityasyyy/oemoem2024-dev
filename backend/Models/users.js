const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    enrolledTo: [
        {
            type: Schema.Types.ObjectId,
            ref: "Event"
        }
    ],
    assignments: [{
        type: Schema.Types.ObjectId,
        ref: "Assignment"
    }]
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);