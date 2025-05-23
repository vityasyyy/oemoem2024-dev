require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const connectDB = require('./Models/connectDB');
const userRoutes = require('./Routes/userRoutes');
const eventRoutes = require('./Routes/eventRoutes');

const app = express();
app.set('trust proxy', 1);

connectDB();

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(mongoSanitize());

app.use('/auth', userRoutes);
app.use('/event', eventRoutes);

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if(!err.message) err.message = "Something went wrong";
  res.status(statusCode).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));