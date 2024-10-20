const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const usersRouter = require('./routes/users');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

async function connect() {
    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to MongoDB!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit if we can't connect to the database
    }
}

// Monitor MongoDB connection events
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
});

// Connect to MongoDB
connect();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Routes
app.use('/users', usersRouter);

const PORT = process.env.PORT || 8080;

// Start server with error handling
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle server errors
server.on('error', (error) => {
    console.error('Server error:', error);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error);
});