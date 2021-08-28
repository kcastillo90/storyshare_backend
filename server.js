//---------- Dependencies ----------//
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//---------- Configuration ----------//
const app = express()

//---------- Middleware ----------//
app.use(express.json())
app.use(cors())

//---------- Controllers ----------//
const storyController = require('./controllers/storyShare.js')
app.use('/stories', storyController)

//---------- Database ----------//
mongoose.connect('mongodb://localhost:27017/storyshare')    // removed options due to mongoose6.0
mongoose.connection.once('open', () => {
  console.log('⚡️Connected to mongodb...⚡️')
})

//---------- Listener ----------//
app.listen(3000, () => {
  console.log('🍀Listening on 3000...🍀');
})
