const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);


//mongodb+srv://stardinesh4:studentDB@cluster0.ekiwn1p.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(url)
  .then((result) => {
    console.log("*******connected to MongoDB********");
  })
  .catch((error) => {
    console.log("Error connecting MongoDB", error.message);
  });
