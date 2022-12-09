// Importing express to run the web server for recieving and sending Json datas
const express = require('express')


const app = express()

// send the response Hello World if anyone queries the home page
app.get('/', (req, res ) => {
    res.send("Hello World")
})

// Making some routes so that everything must not be written in a single document

const inputRoutes = require('./routes/input')

app.use('/input', inputRoutes)



//  Listen on App AKA run the Server
app.listen(3600, () => console.log("I am started"))
