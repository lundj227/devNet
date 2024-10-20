const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // first name, last name, username, email, password
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);