const User = require('../models/User');
const bcrypt = require('bcrypt');
const validator = require('validator');

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password } = req.body;
        if (!firstName || !lastName || !username || !email || !password) {
            return res.status(400).json({ 
                success: false,
                message: 'Please enter all fields.'
             });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email.'
            });
        }
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: 'An account with this email already exists.'
            });
        }
        const existingUsername = await User.findOne( { username });
        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: 'An account with this username already exists.'
            });
        }
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters long.'
            });
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const user = await User.create({
            firstName,
            lastName,
            username,
            email: email.toLowerCase(),
            password: passwordHash
        });

        const userResponse = user.toObject();
        delete userResponse.password;
    } catch (error) {
        console.error("Error in createUser: ", error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.'
        });
        
    }
};

module.exports = { createUser };