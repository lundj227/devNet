// routes/posts.js
const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/posts');

// POST /posts - Create a new post
router.post('/', createPost);

// GET /posts - Get all posts
router.get('/', getAllPosts);

module.exports = router;