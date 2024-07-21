require('dotenv').config();
const mongoose = require('mongoose');
const Event = require('./Models/events'); // Adjust the path to your Event model

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected');
        seedEvents();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

const seedEvents = async () => {
    try {
        // Clear existing events
        await Event.deleteMany({});

        // Sample events data
        const events = [
            {
                title: 'Event 1',
                description: 'Description for event 1',
                location: 'Location 1',
                contactPerson: 'Person 1',
                prerequisite: 'Prerequisite 1',
                slots: 10,
                date: new Date('2024-08-01'),
                groupChat: 'Group Chat Link 1',
                mentors: 'Mentor 1',
                curriculum: 'Curriculum 1'
            },
            {
                title: 'Event 2',
                description: 'Description for event 2',
                location: 'Location 2',
                contactPerson: 'Person 2',
                prerequisite: 'Prerequisite 2',
                slots: 15,
                date: new Date('2024-09-01'),
                groupChat: 'Group Chat Link 2',
                mentors: 'Mentor 2',
                curriculum: 'Curriculum 2'
            },
            {
                title: 'Event 3',
                description: 'Description for event 3',
                location: 'Location 3',
                contactPerson: 'Person 3',
                prerequisite: 'Prerequisite 3',
                slots: 20,
                date: new Date('2024-10-01'),
                groupChat: 'Group Chat Link 3',
                mentors: 'Mentor 3',
                curriculum: 'Curriculum 3'
            }
        ];

        // Insert sample events
        await Event.insertMany(events);

        console.log('Events seeded successfully');
    } catch (error) {
        console.error('Error seeding events:', error);
    } finally {
        mongoose.connection.close();
    }
};
