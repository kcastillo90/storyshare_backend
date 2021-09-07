const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
  title: String,
  author: String,
  synopsis: String,
  story: String,
  account: String
})

const Stories = mongoose.model('Story', storySchema)

module.exports = Stories
