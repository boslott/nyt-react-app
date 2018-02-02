const mongoose = require('mongoose');
const Article = mongoose.model('Article');

exports.findAll = async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
};

exports.create = (req, res) => {
  console.log(req.body);
  console.log('New Article');
  Article.create(req.body)
    .then(article => res.json(article))
    .catch(err => res.status(422).json(err));
};

exports.findById = (req, res) => {};

exports.remove = async (req, res) => {
  console.log('Deleting article');
  console.log(req.params.id)
  await Article.remove({ _id: req.params.id }).exec()
  .then(() => {
    Article.find().then(articles => res.json(articles));
  })
  // .catch(err => res.status(422).json(err));
};