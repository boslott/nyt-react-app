const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const articleSchema = new mongoose.Schema({
  title: String,
  pubDate: Date,
  url: String,
  snippet: String,
  img: String
});

module.exports = mongoose.model('Article', articleSchema);