const router = require('express').Router()
const { response } = require('express')
const path = require('path')
const { getNotes, saveNotes } = require('../functions.js')

// Create route: GET / should return index
router.get('/', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, '../public/index.html'))
}
)

// Create route: GET /notes should return the notes.html file
router.get('/notes', (requestOb, responseObj,) => {
    responseObj.sendFile(path.join(__dirname, '../public/notes.html'))
    // const notes = getNotes()

}
)

// Create route: GET /api/notes should read the db.json file and return all saved notes as JSON
router.get('/api/notes', async (requestObj, responseObj) => {
    const notes = await getNotes();

    responseObj.send(notes)
})

// Create route: POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you)

router.post('/api/notes', async (requestObj, responseObj) => {
    const notes = await getNotes();

    const noteData = requestObj.body
    console.log(requestObj.body)
    // if (!notes.find(note = note.title === noteData.title) && noteData.title) {}
    if (noteData.title) {
        notes.push(noteData)

        await saveNotes(notes)

        return responseObj.send({
            message: 'Note Added'
        })
    }
})


//Wildcard Route: GET * should return the index.html file
router.get('*', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;