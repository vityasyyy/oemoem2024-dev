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
        title: "Competitive Programming",
        description: "Sapiente rem quidem eum ullam atque maxime. Nihil asperiores et ut pariatur cupiditate ut laborum. Enim rerum perferendis expedita veritatis repellat totam. Deserunt nostrum tempore provident nemo. Quas dolor placeat a qui quae ex. Cupiditate voluptas nihil ut eos.…",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        contactPerson: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        slots: 40,
        date: new Date('2024-08-14'),
        deadline: new Date('2024-08-14'), // 5 days before the event
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        mentors: "Jane Smith, Bob Johnson",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721564378/cp_c8t1ry.png",
                filename: "cp_c8t1ry"
            }
        ],
        color: "#9B1A2E",
        shape: [{
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721657098/heart_hlx6vt.png",
            filename: "heart_hlx6vt"
        }]
    },
    {
        title: "Cyber Security",
        description: "Sapiente rem quidem eum ullam atque maxime. Nihil asperiores et ut pariatur cupiditate ut laborum. Enim rerum perferendis expedita veritatis repellat totam. Deserunt nostrum tempore provident nemo. Quas dolor placeat a qui quae ex. Cupiditate voluptas nihil ut eos.…",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        contactPerson: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        slots: 40,
        date: new Date('2024-08-14'),
        deadline: new Date('2024-08-14'), // 5 days before the event
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        mentors: "Jane Smith, Bob Johnson",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721564378/cysec_tkp17a.png",
                filename: "cysec_tkp17a"
            }
        ],
        color: "#302E2F",
        shape: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721657098/diamond_bp7tof.png",
                filename: "diamond_bp7tof"
            }
        ]
    },
    {
        title: "Game Development",
        description: "Sapiente rem quidem eum ullam atque maxime. Nihil asperiores et ut pariatur cupiditate ut laborum. Enim rerum perferendis expedita veritatis repellat totam. Deserunt nostrum tempore provident nemo. Quas dolor placeat a qui quae ex. Cupiditate voluptas nihil ut eos.…",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        contactPerson: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        slots: 40,
        date: new Date('2024-08-14'),
        deadline: new Date('2024-08-14'), // 5 days before the event
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        mentors: "Jane Smith, Bob Johnson",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721564385/gamedev_gbm1d6.png",
                filename: "gamedev_gbm1d6"
            }
        ],
        color: "#467448",
        shape: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721657098/spade_ddeyl3.png",
                filename: "spade_ddeyl3"
            }
        ]
    },
    {
        title: "Back End",
        description: "Sapiente rem quidem eum ullam atque maxime. Nihil asperiores et ut pariatur cupiditate ut laborum. Enim rerum perferendis expedita veritatis repellat totam. Deserunt nostrum tempore provident nemo. Quas dolor placeat a qui quae ex. Cupiditate voluptas nihil ut eos.…",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        contactPerson: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        slots: 40,
        date: new Date('2024-08-14'),
        deadline: new Date('2024-08-14'), // 5 days before the event
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        mentors: "Jane Smith, Bob Johnson",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721564377/backend_tyip33.png",
                filename: "backend_tyip33"
            }
        ],
        color: "#4C5195",
        shape: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721657098/club_xeohar.png",
                filename: "club_xeohar"
            }
        ]
    },
    {
        title: "UI/UX Design",
        description: "Sapiente rem quidem eum ullam atque maxime. Nihil asperiores et ut pariatur cupiditate ut laborum. Enim rerum perferendis expedita veritatis repellat totam. Deserunt nostrum tempore provident nemo. Quas dolor placeat a qui quae ex. Cupiditate voluptas nihil ut eos.…",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        contactPerson: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        slots: 40,
        date: new Date('2024-08-14'),
        deadline: new Date('2024-08-14'), // 5 days before the event
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        mentors: "Jane Smith, Bob Johnson",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721564387/uiux_wtvu0s.png",
                filename: "uiux_wtvu0s"
            }
        ],
        color: "#9B1A2E",
        shape: [{
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721657098/heart_hlx6vt.png",
            filename: "heart_hlx6vt"
        }]
    },
    {
        title: "Mobile Apps",
        description: "Sapiente rem quidem eum ullam atque maxime. Nihil asperiores et ut pariatur cupiditate ut laborum. Enim rerum perferendis expedita veritatis repellat totam. Deserunt nostrum tempore provident nemo. Quas dolor placeat a qui quae ex. Cupiditate voluptas nihil ut eos.…",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        contactPerson: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        slots: 40,
        date: new Date('2024-08-14'),
        deadline: new Date('2024-08-14'), // 5 days before the event
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        mentors: "Jane Smith, Bob Johnson",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721564385/mobapp_owus5o.png",
                filename: "mobapp_owus5o"
            }
        ],
        color: "#302E2F",
        shape: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721657098/diamond_bp7tof.png",
                filename: "diamond_bp7tof"
            }
        ]
    },
    {
        title: "Front End",
        description: "Sapiente rem quidem eum ullam atque maxime. Nihil asperiores et ut pariatur cupiditate ut laborum. Enim rerum perferendis expedita veritatis repellat totam. Deserunt nostrum tempore provident nemo. Quas dolor placeat a qui quae ex. Cupiditate voluptas nihil ut eos.…",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        contactPerson: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        slots: 40,
        date: new Date('2024-08-14'),
        deadline: new Date('2024-08-14'), // 5 days before the event
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        mentors: "Jane Smith, Bob Johnson",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721564384/frontend_flhnkw.png",
                filename: "frontend_flhnkw"
            }
        ],
        color: "#467448",
        shape: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721657098/spade_ddeyl3.png",
                filename: "spade_ddeyl3"
            }
        ]
    },
    {
        title: "Data Science and Artificial Intelligence",
        description: "Sapiente rem quidem eum ullam atque maxime. Nihil asperiores et ut pariatur cupiditate ut laborum. Enim rerum perferendis expedita veritatis repellat totam. Deserunt nostrum tempore provident nemo. Quas dolor placeat a qui quae ex. Cupiditate voluptas nihil ut eos.…",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        contactPerson: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        slots: 40,
        date: new Date('2024-08-14'),
        deadline: new Date('2024-08-14'), // 5 days before the event
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        mentors: "Jane Smith, Bob Johnson",
        curriculum: "HTML, CSS, JavaScript",
        image: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721564379/dsai_qcxlgq.png",
                filename: "dsai_qcxlgq"
            }
        ],
        color: "#4C5195",
        shape: [
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721657098/club_xeohar.png",
                filename: "club_xeohar"
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