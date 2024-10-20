const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const createUser = async (req, res) => {
  try {
    console.log("Starting user creation process...");
    const { firstName, lastName, username, email, password } = req.body;

    // Input validation
    if (!firstName || !lastName || !username || !email || !password) {
      console.log("Missing required fields");
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Email validation
    if (!validator.isEmail(email)) {
      console.log("Invalid email format");
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email",
      });
    }

    // Check if user already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      console.log("Email already exists");
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      console.log("Username already exists");
      return res.status(400).json({
        success: false,
        message: "Username already taken",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Creating new user...");
    // Create new user
    const user = await User.create({
      firstName,
      lastName,
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    console.log("User created successfully");
    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: userResponse,
    });
  } catch (error) {
    console.error("Error in createUser:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    console.log("Fetching all users...");

    // Get users and exclude password field
    const users = await User.find({})
      .select("-password") // Exclude password
      .sort({ createdAt: -1 }); // Sort by newest first

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
