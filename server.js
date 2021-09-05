//---------- Dependencies ----------//
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')

//---------- Configuration ----------//
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT || 3003

//---------- Middleware ----------//
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
)

//---------- Controllers ----------//
const storyController = require('./controllers/storyShare.js')
app.use('/', storyController)

//---------- Database ----------//
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI)    // removed options due to mongoose6.0

//---------- Error/Success ---------//
db.on('error', (err) => console.log(err.message + ' is mongo not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))


mongoose.connection.once('open', () => {
  console.log('⚡️Connected to mongodb...⚡️')
})

//---------- Listener ----------//
app.listen(PORT, () => {
  console.log(`🍀Listening on ${PORT}...🍀`)
})
