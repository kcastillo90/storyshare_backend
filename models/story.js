const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
  title: String,
  author: String,
  story: String,
})

const Stories = mongoose.model('Story', storySchema)

module.exports = Stories
