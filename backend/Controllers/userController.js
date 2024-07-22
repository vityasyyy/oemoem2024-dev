const User = require('../Models/users');

module.exports.register = async (req, res) => {
    try{
        const {email, username, password, nim, phoneNumber} = req.body;
        const user = new User({email,username,nim,phoneNumber});
        await User.register(user, password);
        req.login(user, (err) => {
            if(err) {
                return next(err);
            }
            res.status(201).json({message: "Register succesful", user: req.user})
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports.login = (req, res) => {
    res.json({message: "Login successful", user: req.user});
}

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        res.json({message: "Logout successful"});
    })
}

module.exports.validate = async (req, res) => {
    if (req.isAuthenticated()) {
        res.json({message: "Authenticated", user: req.user})
    } else {
        res.status(401).json({message: "Not authenticated"})
    }
}