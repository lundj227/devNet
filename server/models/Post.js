// models/Post.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
); // Enable timestamps

module.exports = mongoose.model("Post", postSchema);
