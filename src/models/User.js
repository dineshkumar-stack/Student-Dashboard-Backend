const mongoose = require("mongoose");

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

  codePracticeScores: [
    {
      score: Number,
      timeStamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  webPracticeScores: [
    {
      score: Number,
      timeStamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  userDetails: [{
    DPimage: String,
    name: String,
    phone: Number,
    email: String,
    batch: String,
    Qualification: String,
    yearOfPass: Number,
    yearOfExperience: Number,
    noticePeriod: Number,
    gifhud: String,
    resume: String,
    portfolioURL: String,
    timeStamp: {
      type: Date,
      default: Date.now,
    },
  }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
