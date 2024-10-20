const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/users');

// Test route to verify the router is working
router.get('/test', (req, res) => {
    res.json({ message: 'Users route is working' });
});

// Create user route
router.post('/newUser', (req, res) => {
    createUser(req, res);
});

module.exports = router;