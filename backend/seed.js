const mongoose = require('mongoose');
const Event = require('./Models/events'); // Adjust this path as needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/oemoem2024');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// Sample data
const sampleEvents = [
    {
        title: "Web Development Workshop",
        description: "Learn the basics of web development",
        location: "Online",
        contactPerson: "John Doe",
        prerequisite: "Basic programming knowledge",
        slots: 30,
        date: new Date('2023-08-15'),
        deadline: new Date('2023-08-10'), // 5 days before the event
        groupChat: "https://chat.example.com/webdev",
        mentors: "Jane Smith, Bob Johnson",
        emailKadiv: "kadiv@example.com",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1709872054/Deedoo/alnlsl8evmcadlso3cnr.jpg",
                filename: "alnlsl8evmcadlso3cnr"
            }
        ]
    },
    {
        title: "Data Science Seminar",
        description: "Explore the world of data science",
        location: "Tech Hub, City Center",
        contactPerson: "Alice Brown",
        prerequisite: "Statistics basics",
        slots: 50,
        date: new Date('2023-09-01'),
        deadline: new Date('2023-08-25'), // 7 days before the event
        groupChat: "https://chat.example.com/datascience",
        mentors: "Charlie Davis, Eve Wilson",
        emailKadiv: "kadiv@example.com",
        curriculum: "Python, pandas, scikit-learn",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1709872054/Deedoo/alnlsl8evmcadlso3cnr.jpg",
                filename: "alnlsl8evmcadlso3cnr"
            }
        ]
    }
];

// Function to seed the database
const seedDB = async () => {
    await Event.deleteMany({}); // Clear existing events
    for (let eventData of sampleEvents) {
        const event = new Event(eventData);
        await event.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Database seeded and connection closed");
});