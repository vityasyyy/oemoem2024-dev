require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const LocalStrategy = require('passport-local');
const mongoSanitize = require('express-mongo-sanitize');
const passport = require('passport');
const session = require('express-session');
const { default: mongoose } = require('mongoose');
const MongoStore = require('connect-mongo');
const cors = require('cors');

const connectDB = require('./Models/connectDB');
const ExpressError = require('./Middlewares/ExpressError');
const User = require('./Models/users');
const userRoutes = require('./Routes/userRoutes');
const eventRoutes = require('./Routes/eventRoutes');

const SECRET = process.env.SECRET;
const app = express();
app.set('trust proxy', 1);

mongoose.set('strictQuery', true);
connectDB();

const store = MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    touchAfter: 24 * 60 * 60,
    crypto: {
        SECRET
    }
})
store.on('error', function(error) {
    console.log('session store error', error);
})
const sessionConfig = {
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        touchAfter: 24 * 60 * 60,
        crypto: {
            secret: SECRET
        }
    }),
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only use secure in production
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // Important for cross-site cookies in production
        maxAge: 1000 * 60 * 60 * 24
    }
};


app.use(session(sessionConfig));
app.use(helmet({
    contentSecurityPolicy: false
}));

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy({
    usernameField: 'email'
}, User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
    credentials: true // Allow credentials (cookies) to be sent
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(mongoSanitize())

app.get('/', (req, res)=>{
    res.send("HELLO")
})
app.use('/auth', userRoutes);
app.use('/event', eventRoutes);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = "Something went wrong"
    res.status(statusCode).json({ error: err.message });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on PORT${PORT}`);
})