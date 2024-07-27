const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [emailRegex, 'Please fill a valid email address']
    },
    username: {
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
    assignment: [{
        type: Schema.Types.ObjectId,
        ref: "Assignment"
    }]
});

// Add password validation using a custom validator
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
});

module.exports = mongoose.model('User', userSchema);
