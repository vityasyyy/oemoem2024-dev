const User = require('../Models/users');

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password, nim, phoneNumber } = req.body;
        const user = new User({ email, username, nim, phoneNumber });

        // Register the user with password
        await User.register(user, password);

        // Log in the user
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            res.status(201).json({ message: "Registration successful", user: req.user });
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports.login = (req, res) => {
    res.json({ message: "Login successful", user: req.user });
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.clearCookie('connect.sid'); // Clear the session cookie
            res.json({ message: "Logout successful" });
        });
    });
}

module.exports.validate = (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ message: "Authenticated", user: req.user });
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
};

module.exports.getEnrolledEvent = async (req, res) => {
    try {
        // Find the user and populate enrolledTo field
        const user = await User.findById(req.params.id).populate('enrolledTo');
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user.enrolledTo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
