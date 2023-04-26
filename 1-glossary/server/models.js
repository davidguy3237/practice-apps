const mongoose = require('./db');

const wordSchema = new mongoose.Schema({
  word: {type: String, required: true, unique: true},
  definition: {type: String, required: true}
})

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;