const fs = require('fs')
const express = require('express')
const note_routes = require('./routes/note_routes')
const app = express()

const PORT = 3334

app.use(express.static('./public'))
// NEED JSON READER WHEN REQUESTING JSON
app.use(express.json())

// Load Routes
app.use('/', note_routes)

app.listen(PORT, () => {
    console.log('Note Taker App is running!')
})