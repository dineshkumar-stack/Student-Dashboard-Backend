const mongoose = require("mongoose");

const taskBarChartSchema = new mongoose.Schema({
  title: String,
  SNo: Number,
  subTitle: String,
  FrontEndLink: String,
  BackEndLink: String,
  mark: Number,
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

//cleanup__
taskBarChartSchema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

module.exports = mongoose.model("TaskBar", taskBarChartSchema);
