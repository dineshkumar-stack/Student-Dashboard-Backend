const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then((result) => {
    console.log("*******connected to MongoDB*******");
  })
  .catch((error) => {
    console.log("Error connecting MongoDB", error.message);
  });

// config/config.js
module.exports = {
  jwtSecret: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNDYxMDQ2MTAwIiwibmFtZSI6IkRpbmVzaCBLdW1hciIsImlhdCI6MTUxNjIzOTAyMn0.BR43aaZvbTAT_InsOzrZFYz3Tvssejw22j_zBh9EgYI',
};
  

