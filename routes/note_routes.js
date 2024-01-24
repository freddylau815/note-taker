const router = require('express').Router()
const path = require('path')
// const { getNotes, saveNotes } = require('../public')


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
router.get('')



//Wildcard Route: GET * should return the index.html file
router.get('*', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;