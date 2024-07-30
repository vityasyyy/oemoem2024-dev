require('dotenv').config();
const mongoose = require('mongoose');
const Event = require('./Models/events'); // Adjust this path as needed
const Assignment = require('./Models/assignments');
const User = require('./Models/users');
const BlacklistedToken = require('./Models/tokenBlacklist');
const moment = require('moment-timezone');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// Sample data
const sampleEvents = [
    {
        title: "Competitive Programming",
        description: "Competitive Programming is a field for those specializing in coding tournaments where contestants must solve computational and algorithmic puzzles in a predetermined amount of time. It develops analytical thinking, problem-solving abilities, and effective coding techniques. You will study sophisticated data structures, algorithms, and methods to effectively tackle challenging issues in a competitive programming course! These competencies are essential for dominating coding competitions, technical interviews, and creating effective software solutions. The goal of taking a deeper dive into Competitive Programming is to improve your pace and ability in analyzing problems, while simultaneously exposing you to a wide range of increasingly difficult computational problems.",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        assets: "MMMMMM FOOD",
        slots: 40,
        dateClose: moment.tz('2024-08-13T15:00:00', 'Asia/Bangkok').toDate(),
        displayDate: moment.tz('2024-08-23T15:00:00', 'Asia/Bangkok').toDate(),
        date: moment.tz('2024-08-1T23T15:00:00', 'Asia/Bangkok').toDate(),
        deadline: moment.tz('2024-08-30T23:59:59', 'Asia/Bangkok').toDate(), // 5 days before the event
        openAssignment: moment.tz('2024-08-23T18:00:00', 'Asia/Bangkok').toDate(),
        contactPerson: {
            namaCP: "Contact Person Name", // Replace with the actual contact person's name
            linkCP: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc"
        },
        mentors: {
            namaMentor: "Muhammad Syifaurrohman", // Replace with the actual mentor names if possible
            gambarMentor: {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            },
            divisiMentor: "Competitive Programming", // Replace with actual division if available
            tahunAjaran: "2024" // Replace with the actual academic year if available
        },
        curriculum: "HTML, CSS, JavaScript",
        image: {
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732186/cp_vrujbi.svg",
            filename: "cp_vrujbi"
        },
        color: "#9B1A2E",
        shape: {
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732598/heart_i4ldcx.svg",
            filename: "heart_i4ldcx"
        },
        imageWarna: {
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732099/cpWarna_vnbmaw.svg",
            filename: "cpWarna_vnbmaw"
        },
        assignmentDetail: "Lorem ipsum dolor sit jamet comisaris adipipising elit"
    },

    {
        title: "Cyber Security",
        description: "Cybersecurity is the practice of safeguarding digital systems, networks, and data from threats and unauthorized access. It involves measures such as encryption, network security, and access controls to ensure information confidentiality, integrity, and availability. Security awareness training educates users to recognize threats like phishing and malware. Incident response plans address breaches. While vulnerability management identifies and fixes system weaknesses. Overall cybersecurity aims to protect digital resources and maintain the integrity of online interactions. ",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        assets: "MMMMMM FOOD",
        slots: 40,
        dateClose: moment.tz('2024-08-13T15:00:00', 'Asia/Bangkok').toDate(),
        displayDate: moment.tz('2024-08-16T15:00:00', 'Asia/Bangkok').toDate(),
        date: moment.tz('2024-08-1T23T15:00:00', 'Asia/Bangkok').toDate(),
        deadline: moment.tz('2024-08-23T23:59:59', 'Asia/Bangkok').toDate(), // 5 days before the event
        openAssignment: moment.tz('2024-08-16T18:00:00', 'Asia/Bangkok').toDate(),
        contactPerson: {
            namaCP: "Contact Person Name", // Replace with the actual contact person's name
            linkCP: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc"
        },
        mentors: {
            namaMentor: "Fitriansyah Eka Putra", // Replace with the actual mentor names if possible
            gambarMentor: {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            },
            divisiMentor: "Cyber Security", // Replace with actual division if available
            tahunAjaran: "2024" // Replace with the actual academic year if available
        },
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
            },
        assignmentDetail: "Lorem ipsum dolor sit jamet comisaris adipipising elit"
    },
    {
        title: "Game Development",
        description: "Game development encompasses the imaginative and technological undertaking of conceptualizing, creating, and actualizing video games. This multifaceted endeavor involves a collective endeavor of experts possessing diverse skills such as design artistic proficiency, programming, prowess, and audio expertise. The journey commences with idea generation, subsequently progressing to the crafting of game dynamics, storyline, and visual concepts. ",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        assets: "MMMMMM FOOD",
        slots: 40,
        dateClose: moment.tz('2024-08-13T15:00:00', 'Asia/Bangkok').toDate(),
        displayDate: moment.tz('2024-08-26T15:00:00', 'Asia/Bangkok').toDate(),
        date: moment.tz('2024-08-1T23T15:00:00', 'Asia/Bangkok').toDate(),
        deadline: moment.tz('2024-09-2T23:59:59', 'Asia/Bangkok').toDate(), // 5 days before the event
        openAssignment: moment.tz('2024-08-26T18:00:00', 'Asia/Bangkok').toDate(),
        contactPerson: {
            namaCP: "Contact Person Name", // Replace with the actual contact person's name
            linkCP: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc"
        },
        mentors: {
            namaMentor: "Irfan Fadilah Rafif", // Replace with the actual mentor names if possible
            gambarMentor: {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            },
            divisiMentor: "Game Development", // Replace with actual division if available
            tahunAjaran: "2024" // Replace with the actual academic year if available
        },
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
            },
        assignmentDetail: "Lorem ipsum dolor sit jamet comisaris adipipising elit"

    },
    {
        title: "Back End",
        description: "Backend development encompasses the creation, construction, and continuous upkeep of the server component of web applications. This involves tasks such as managing databases, handling APIs, and implementing server-side logic to facilitate the seamless operation of the application's user interface. Backend developers bear the responsibility of guaranteeing the efficiency, safety, and expandability of the application's server framework. Enlist now!",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        assets: "MMMMMM FOOD",
        slots: 40,
        dateClose: moment.tz('2024-08-13T15:00:00', 'Asia/Bangkok').toDate(),
        displayDate: moment.tz('2024-08-20T15:00:00', 'Asia/Bangkok').toDate(),
        date: moment.tz('2024-08-1T23T15:00:00', 'Asia/Bangkok').toDate(),
        deadline: moment.tz('2024-08-27T23:59:59', 'Asia/Bangkok').toDate(), // 5 days before the event
        openAssignment: moment.tz('2024-08-20T18:00:00', 'Asia/Bangkok').toDate(),
        contactPerson: {
            namaCP: "Contact Person Name", // Replace with the actual contact person's name
            linkCP: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc"
        },
        mentors: {
            namaMentor: "Alexander Adam Mukhaer", // Replace with the actual mentor names if possible
            gambarMentor: {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            },
            divisiMentor: "Backend", // Replace with actual division if available
            tahunAjaran: "2024" // Replace with the actual academic year if available
        },
        curriculum: "HTML, CSS, JavaScript",
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732168/backend_ynpwey.svg",
                filename: "backend_ynpwey"
            }
        ,
        color: "#4C5195",
        shape:
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732605/club_lkjjcq.svg",
                filename: "club_lkjjcq"
            }
        ,
        imageWarna: 
            {
                url:"https://res.cloudinary.com/dlfriigdo/image/upload/v1721732099/backendWarna_hkx6zz.svg", 
                filename:"backendWarna_hkx6zz"
            },
            assignmentDetail: "Lorem ipsum dolor sit jamet comisaris adipipising elit"
    },
    {
        title: "UI/UX Design",
        description: "UX (User Experience) focuses on creating a seamless and pleasurable user interaction, while UI (User Interface) includes the design of visual elements such as buttons and menus. UI/UX involves learning about design principles, usability testing, wireframing, and prototyping altogether. With the help of these abilities, you can produce designs for digital products such as websites and applications, particularly ones that put first the user demands while able to improve both aspects of aesthetics and usefulness. UI/UX teaches you how to develop user-centered designs that offer the users a satisfying and effective experience.",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        assets: "MMMMMM FOOD",
        slots: 40,
        dateClose: moment.tz('2024-08-13T15:00:00', 'Asia/Bangkok').toDate(),
        displayDate: moment.tz('2024-08-14T15:00:00', 'Asia/Bangkok').toDate(),
        date: moment.tz('2024-08-1T23T15:00:00', 'Asia/Bangkok').toDate(),
        deadline: moment.tz('2024-08-21T23:59:59', 'Asia/Bangkok').toDate(), // 5 days before the event
        openAssignment: moment.tz('2024-08-14T18:00:00', 'Asia/Bangkok').toDate(),
        contactPerson: {
            namaCP: "Contact Person Name", // Replace with the actual contact person's name
            linkCP: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc"
        },
        mentors: {
            namaMentor: "Zalfaa Aulia", // Replace with the actual mentor names if possible
            gambarMentor: {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            },
            divisiMentor: "UI/UX", // Replace with actual division if available
            tahunAjaran: "2024" // Replace with the actual academic year if available
        },
        curriculum: "HTML, CSS, JavaScript",
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732170/uiux_mvuzpa.svg",
                filename: "uiux_mvuzpa"
            }
        ,
        color: "#9B1A2E",
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
            },
            assignmentDetail: "Lorem ipsum dolor sit jamet comisaris adipipising elit"
    },
    {
        title: "Mobile Apps",
        description: "Mobile app development centered around Dart and Flutter involves the conception, assembly, and ongoing maintenance of the application's backend infrastructure. This entails duties like database administration, API integration, and the integration of server-side algorithms to ensure the smooth functionality of the app's user interface. Within this realm, mobile app backend developers shoulder the task of ensuring the efficacy, security, and scalability of the app's backend architecture. They additionally architect systems that are both easily maintainable and primed for future advancements in the field.",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        assets: "MMMMMM FOOD",
        slots: 40,
        dateClose: moment.tz('2024-08-13T15:00:00', 'Asia/Bangkok').toDate(),
        displayDate: moment.tz('2024-08-27T15:00:00', 'Asia/Bangkok').toDate(),
        date: moment.tz('2024-08-1T23T15:00:00', 'Asia/Bangkok').toDate(),
        deadline: moment.tz('2024-09-03T23:59:59', 'Asia/Bangkok').toDate(), // 5 days before the event
        openAssignment: moment.tz('2024-08-27T18:00:00', 'Asia/Bangkok').toDate(),
        contactPerson: {
            namaCP: "Contact Person Name", // Replace with the actual contact person's name
            linkCP: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc"
        },
        mentors: {
            namaMentor: "Maulana Arya Alambana", // Replace with the actual mentor names if possible
            gambarMentor: {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            },
            divisiMentor: "Mobile Apps", // Replace with actual division if available
            tahunAjaran: "2024" // Replace with the actual academic year if available
        },
        curriculum: "HTML, CSS, JavaScript",
        assignments: [], // Add any ObjectId references to assignments here
        enrolledBy: [], // Add any ObjectId references to users here
        image: {
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
            filename: "mobapp_eoe9f4"
        },
        imageWarna: {
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732117/mobappWarna_hf76tk.svg",
            filename: "mobappWarna_hf76tk"
        },
        shape: {
            url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732594/diamond_i0gtkn.svg",
            filename: "diamond_i0gtkn"
        },
        color: "#302E2F",
        assignmentDetail: "Lorem ipsum dolor sit jamet comisaris adipipising elit"
    },
    {
        title: "Front End",
        description: "Frontend development revolves around the construction, and ongoing enhancement of the user-facing aspects of web applications. This encompasses tasks like structuring content using HTML, enhancing visual appeal with CSS, and implementing dynamic functionalities through frameworks like ReactJS and libraries like Next.js. Frontend developers play a pivotal role in crafting engaging user interfaces and ensuring seamless user experiences. They are tasked with creating layouts that are visually compelling and responsive across devices. Moreover, they collaborate closely with backend teams to integrate frontend and backend functionalities, thereby contributing to the overall efficiency and user satisfaction of web applications.",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        assets: "MMMMMM FOOD",
        slots: 40,
        dateClose: moment.tz('2024-08-13T15:00:00', 'Asia/Bangkok').toDate(),
        displayDate: moment.tz('2024-08-21T15:00:00', 'Asia/Bangkok').toDate(),
        date: moment.tz('2024-08-1T23T15:00:00', 'Asia/Bangkok').toDate(),
        deadline: moment.tz('2024-08-28T23:59:59', 'Asia/Bangkok').toDate(), // 5 days before the event
        openAssignment: moment.tz('2024-08-21T18:00:00', 'Asia/Bangkok').toDate(),
        contactPerson: {
            namaCP: "Contact Person Name", // Replace with the actual contact person's name
            linkCP: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc"
        },
        mentors: {
            namaMentor: "David Lois", // Replace with the actual mentor names if possible
            gambarMentor: {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            },
            divisiMentor: "Mentor Division", // Replace with actual division if available
            tahunAjaran: "2024" // Replace with the actual academic year if available
        },
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
            },
            assignmentDetail: "Lorem ipsum dolor sit jamet comisaris adipipising elit"
    },
    {
        title: "Data Science and Artificial Intelligence",
        description: "A division focused on data science and artificial intelligence develops strategies and technologies to utilize data for driving business outcomes. This group includes data scientists, AI researchers, and engineers who collaborate to gather and analyze data, create algorithms, and build intelligent systems for task automation and insights. The division aims to unlock data value and innovate solutions for business growth, improved customer experience, and operational optimization.",
        location: "https://maps.app.goo.gl/AjDwpSEP2Asf58QQ9",
        groupChat: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc",
        prerequisite: "Basic programming knowledge",
        assets: "MMMMMM FOOD",
        slots: 40,
        dateClose: moment.tz('2024-08-13T15:00:00', 'Asia/Bangkok').toDate(),
        displayDate: moment.tz('2024-08-19T15:00:00', 'Asia/Bangkok').toDate(),
        date: moment.tz('2024-08-1T23T15:00:00', 'Asia/Bangkok').toDate(),
        deadline: moment.tz('2024-08-26T23:59:59', 'Asia/Bangkok').toDate(), // 5 days before the event
        openAssignment: moment.tz('2024-08-19T18:00:00', 'Asia/Bangkok').toDate(),
        contactPerson: {
            namaCP: "Contact Person Name", // Replace with the actual contact person's name
            linkCP: "https://chat.whatsapp.com/HlRToLUOaQ5JkI5IP4ViYc"
        },
        mentors: {
            namaMentor: "Muhammad Dafa Wisnu Galih", // Replace with the actual mentor names if possible
            gambarMentor: {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732229/mobapp_eoe9f4.svg",
                filename: "mobapp_eoe9f4"
            },
            divisiMentor: "DSAI", // Replace with actual division if available
            tahunAjaran: "2024" // Replace with the actual academic year if available
        },
        curriculum: "HTML, CSS, JavaScript",
        image: 
            {
                url: "https://res.cloudinary.com/dlfriigdo/image/upload/v1721732193/dsai_y37hav.svg",
                filename: "dsai_y37hav"
            }
        ,
        color: "#4C5195",
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
            },
            assignmentDetail: "Lorem ipsum dolor sit jamet comisaris adipipising elit"
    }
];

// Function to seed the database
const seedDB = async () => {
    await Event.deleteMany({});
    await Assignment.deleteMany({});
    await User.deleteMany({});
    await BlacklistedToken.deleteMany({}) // Clear existing events
    for (let eventData of sampleEvents) {
        const event = new Event(eventData);
        await event.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Database seeded and connection closed");
});
