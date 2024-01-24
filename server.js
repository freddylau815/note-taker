const fs = require('fs')
const express = require('express')
const note_routes = require('./routes/note_routes')
const app = express()

const PORT = 3334

app.use(express.static('./public'))

// // Get notes data from JSON
// async function getNotes() {
//     const notes = await fs.promises.readFile('./db/db.json', 'utf8');
//     console.log('hello', notes)
//     return JSON.parse(notes)
// }

// async function saveNotes(userNotes) {
//     await fs.promises.writeFileq('./db/db.json', JSON.stringify(userNotes, null, 2))
//     console.log('Notes Added')
// }

// Load Routes
app.use('/', note_routes)

app.listen(PORT, () => {
    console.log('Note Taker App is running!')
})

// module.exports = { 
//     getNotes,
//     saveNotes
// }