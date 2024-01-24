const fs = require('fs')

// Get notes data from JSON
async function getNotes() {
    const notes = await fs.promises.readFile('./db/db.json', 'utf8');
    console.log('hello', notes)
    return JSON.parse(notes)
}

async function saveNotes(userNotes) {
    await fs.promises.writeFile('./db/db.json', JSON.stringify(userNotes, null, 2))
    console.log('Notes Added')
}

module.exports = { 
    getNotes: getNotes,
    saveNotes: saveNotes
}