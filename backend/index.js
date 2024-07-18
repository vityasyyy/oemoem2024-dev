require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const session = require('express-session');
const mongoSanitize = require('express-mongo-sanitize');
const MongoStore = require('connect-mongo');
const User = require('./Models/users');
const Event = require('./Models/events');
const connectDB = require('./Models/connectDB');
const ExpressError = require('./Middlewares/ExpressError');
const { default: mongoose } = require('mongoose');
const SECRET = process.env.SECRET;
const LocalStrategy = require('passport-local')
const userRoutes = require('./Routes/userRoutes');
const app = express();

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
    store, secret: SECRET, resave: false, saveUninitialized: false, cookies: { httpOnly: true, expires: Date.now() + 1000 * 60 * 60 * 24}, maxAge: 1000 * 60 * 60 * 24
}

app.use(session(sessionConfig));
app.use(helmet({
    contentSecurityPolicy: false
}));

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(mongoSanitize())

app.get('/', (req, res)=>{
    res.send("HELLO")
})

app.use('/auth', userRoutes);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = "Something is wrong"
    res.status(statusCode);
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on PORT${PORT}`);
})