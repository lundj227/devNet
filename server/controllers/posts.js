// controllers/postController.js
const Post = require("../models/Post");

// Create new post
const createPost = async (req, res) => {
  try {
    const { userName, firstName, lastName, body } = req.body;

    // Validate request body
    if (!userName || !firstName || !lastName || !body) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create new post
    const newPost = new Post({
      userName,
      firstName,
      lastName,
      body,
    });

    // Save post to database
    const savedPost = await newPost.save();

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: savedPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({
      success: false,
      message: "Error creating post",
      error: error.message,
    });
  }
};

// controllers/postController.js
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching posts",
      error: error.message,
    });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
