const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const usersRouter = require('./routes/users');

const uri = "mongodb+srv://jlund3:HackUO@users.3dpkl.mongodb.net/?retryWrites=true&w=majority&appName=Users";

async function connect() {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("Error connecting to the database. \nExiting now...", error);
  }
}
connect()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRouter);



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});