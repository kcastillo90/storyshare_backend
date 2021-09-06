const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
  title: String,
  author: String,         // username should ultimately be inserted on front-end
  synopsis: String,
  story: String,
})

const Stories = mongoose.model('Story', storySchema)

module.exports = Stories
