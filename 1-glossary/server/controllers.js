const Word = require('./models');

module.exports = {
  get: function(req, res) {
    Word
      .find({word: {
        $regex: req.query.search ?? '',
        $options: 'i'
      }})
      .sort('word')
      .then(words => res.json(words));
  },
  post: function(req, res) {
    const {word, definition} = req.body;
    Word.create({word, definition})
      .then(() => Word.find().sort('word'))
      .then(words => res.json(words))
      .catch(err => res.sendStatus(400));
  },
  patch: function (req, res) {
    const update = {word: req.body.word, definition: req.body.definition};

    Word.findOneAndUpdate({_id: req.body._id}, update)
      .then(() => Word.find().sort('word'))
      .then(words => res.json(words))
  },
  delete: function(req, res) {
    Word.deleteOne(req.body)
      .then(() => Word.find().sort('word'))
      .then(words => res.json(words))
  }
};