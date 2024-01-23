const router = require('express').Router()
const path = require('path')
const { getNotes, saveNotes } = require('../server')

// Create route: GET /notes should return the notes.html file
router.get('/notes', async (requestOb, responseObj,) => {
    responseObj.sendFile(path.join(__dirname, '../public/notes.html'))
},
    const notes = await getNotes()
)

// Create route: GET * should return the index.html file
router.get('/', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, '../public/index.html'))
}
)

module.exports = router;