const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
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
});

//cleanup__
userDetailSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

module.exports = mongoose.model("UserDetail", userDetailSchema);
