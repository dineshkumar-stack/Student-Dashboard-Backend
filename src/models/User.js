const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add other user properties here
  codePracticeScores: [
    {
      score: Number,
      timeStamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

// Create the User model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
