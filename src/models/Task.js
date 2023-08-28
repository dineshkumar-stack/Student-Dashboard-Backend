const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  mark: Number,
  link: String,
});

//cleanup
taskSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString()
    delete returnObject._id
    delete returnObject.__v
  }
});


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
