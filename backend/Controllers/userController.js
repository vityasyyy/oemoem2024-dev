require('dotenv').config()
const User = require('../Models/users');
const jwt = require('jsonwebtoken');
const BlacklistedToken = require('../Models/tokenBlacklist');
const mongoose = require('mongoose');

module.exports.register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        let user = await User.findOne({ $or: [{ email }, { username }] });
        if (user) return res.status(400).json({ error: 'User already exists' });

        user = new User({ email, username, password });
        await user.save();

        // Create token with additional data
        const token = jwt.sign({
            _id: user._id,
            email: user.email,
            username: user.username
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ 
            message: "Registration successful",
            token,
            user: { _id: user._id, email: user.email, username: user.username }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

        // Create token with additional data
        const token = jwt.sign({
            _id: user._id,
            email: user.email,
            username: user.username
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ 
            message: "Login successful",
            token,
            user: { _id: user._id, email: user.email, username: user.username }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.logout = async (req, res) => {
    try {
        // Add the token to the blacklist
        const decoded = jwt.decode(req.token);
        await BlacklistedToken.create({
            token: req.token,
            expiresAt: new Date(decoded.exp * 1000),  // Convert exp to milliseconds
        });

        res.json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.validate = (req, res) => {
    res.json({ message: "Authenticated", user: { id: req.user._id, email: req.user.email, username: req.user.username } });
};

module.exports.getEnrolledEvent = async (req, res) => {
    try {
        const userId = req.params.id;  // Ensure consistency with route parameter name

        // Validate that userId is provided
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Check if the user ID is a valid ObjectId (if you're using MongoDB)
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        // Find the user and populate enrolledTo field
        const user = await User.findById(userId).populate('enrolledTo');
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            enrolledTo: user.enrolledTo,
            email: user.email,
            username: user.username
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
