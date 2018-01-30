const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const articleSchema = new mongoose.Schema({
  title: String,
  date: Date,
  url: String
});

module.exports = mongoose.model('Article', articleSchema);