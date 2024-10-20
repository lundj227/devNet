const express = require("express");
const router = express.Router();
const { createUser, getAllUsers, loginUser } = require("../controllers/users");

// Test route to verify the router is working
router.get("/test", (req, res) => {
  res.json({ message: "Users route is working" });
});

router.get("/", getAllUsers);

// Create user route
router.post("/signup", createUser); // Changed from '/newUser' to '/signup'

// Add the login route
router.post("/login", loginUser);

module.exports = router;
