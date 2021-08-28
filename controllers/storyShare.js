const express = require('express')
const router = express.Router()
const Stories = require('../models/story.js')

router.get('/', (req, res) => {
  Stories.find({}, (err, foundStories) => {
    res.json(foundStories)
  })
})

router.post('/', (req, res) => {
  Stories.create(req.body, (err, createdStory) => {
    res.json(createdStory)
  })
})

router.delete('/:id', (req, res) => {
  Stories.findByIdAndRemove(req.params.id, (err, deletedStory) => {
    res.json(deletedStory)
  })
})

router.put('/:id', (req, res) => {
  Stories.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedStory) => {
    res.json(updatedStory)
  })
})

module.exports = router
