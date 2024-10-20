const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/users');

router.get('/', (req, res) => {
    res.send('Hello from users route');
});

router.post('/newUser', createUser);

module.exports = router;