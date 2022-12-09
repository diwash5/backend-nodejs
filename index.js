// Importing express to run the web server for recieving and sending Json datas
const express = require('express')
// Importing MongoDB to deal with Database stuff
const mongoose = require('mongoose')

const mongooseurl = `${process.env.mongourl}`
const app = express()
// Dealing with some prompt
mongoose.set('strictQuery', false);

// send the response Hello World if anyone queries the home page
app.get('/', (req, res ) => {
    res.send("Hello World")
})

// Making some routes so that everything must not be written in a single document
const inputRoutes = require('./routes/input')

app.use('/input', inputRoutes)

// Connect to mongoose and then Listen on App AKA run the Server
mongoose.connect(mongooseurl)
  .then((result) => {
    app.listen(3600, () => console.log("I am started"))
  })
  .catch((err) => console.log(err));