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
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732186/cp_vrujbi.svg",
                filename: "cp_vrujbi"
            }
        ,
        color: "#9B1A2E",
        shape: {
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732598/heart_i4ldcx.svg",
            filename: "heart_i4ldcx"
        },
        imageWarna: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732099/cpWarna_vnbmaw.svg",
                filename: "cpWarna_vnbmaw"
            }
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
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732189/cysec_b4efrf.svg",
                filename: "cysec_b4efrf"
            }
        ,
        color: "#302E2F",
        shape: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732594/diamond_i0gtkn.svg",
                filename: "diamond_i0gtkn"
            }
        ,
        imageWarna: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732100/cysecWarna_urho2g.svg",
                filename: "cysecWarna_urho2g"
            }
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
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732206/gamedev_nokg0w.svg",
                filename: "gamedev_nokg0w"
            }
        ,
        color: "#467448",
        shape:
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732620/spade_xh3gah.svg",
                filename: "spade_xh3gah"
            }
        ,
        imageWarna: 
            {
                url:"https://res.cloudinary.com/dlfriigdo/image/upload/v1721732109/gamedevWarna_dpaqkn.svg", 
                filename:"gamedevWarna_dpaqkn"
            }

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
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732168/backend_ynpwey.svg",
                filename: "backend_ynpwey"
            }
        ,
        color: "#467448",
        shape:
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732605/club_lkjjcq.svg",
                filename: "club_lkjjcq"
            }
        ,
        imageWarna: 
            {
                url:"https://res.cloudinary.com/dlfriigdo/image/upload/v1721732109/gamedevWarna_dpaqkn.svg", 
                filename:"gamedevWarna_dpaqkn"
            }
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
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732170/uiux_mvuzpa.svg",
                filename: "uiux_mvuzpa"
            }
        ,
        color: "#467448",
        shape:
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732598/heart_i4ldcx.svg",
                filename: "heart_i4ldcx"
            }
        ,
        imageWarna: 
            {
                url:"https://res.cloudinary.com/dlfriigdo/image/upload/v1721732118/uiuxWarna_rhn2lj.svg", 
                filename:"uiuxWarna_rhn2lj"
            }
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
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            }
        ,
        color: "#467448",
        shape:
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732594/diamond_i0gtkn.svg",
                filename: "diamond_i0gtkn"
            }
        ,
        imageWarna: 
            {
                url:"https://res.cloudinary.com/dlfriigdo/image/upload/v1721732117/mobappWarna_hf76tk.svg", 
                filename:"mobappWarna_hf76tk"
            }
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
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732203/frontend_fu8fal.svg",
                filename: "frontend_fu8fal"
            }
        ,
        color: "#467448",
        shape:
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732620/spade_xh3gah.svg",
                filename: "spade_xh3gah"
            }
        ,
        imageWarna: 
            {
                url:"https://res.cloudinary.com/dlfriigdo/image/upload/v1721732107/feWarna_qw4jtb.svg", 
                filename:"feWarna_qw4jtb"
            }
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
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732193/dsai_y37hav.svg",
                filename: "dsai_y37hav"
            }
        ,
        color: "#467448",
        shape:
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732605/club_lkjjcq.svg",
                filename: "club_lkjjcq"
            }
        ,
        imageWarna: 
            {
                url:"https://res.cloudinary.com/dlfriigdo/image/upload/v1721732107/dsaiWarna_ftwyhv.svg", 
                filename:"dsaiWarna_ftwyhv"
            }
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