const Word = require('./models');

module.exports = {
  get: function(req, res) {
    Word.find({word: {
      $regex: req.query.search ?? '',
      $options: 'i'
    }})
      .then(words => {
        res.json(words);
      })
  },
  post: function(req, res) {
    const {word, definition} = req.body;
    Word.create({word, definition})
      .then(word => {
        res.json(word);
      })
  }
};