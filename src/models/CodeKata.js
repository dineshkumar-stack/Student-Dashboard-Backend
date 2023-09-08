// models/CodeKata.js
const mongoose = require('mongoose');

const codeKataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('CodeKata', codeKataSchema);
