const router = require('express').Router()
const path = require('path')

// Create route: GET /notes should return the notes.html file
router.get('/notes', (requestOb, responseObj, ) => {
    responseObj.sendFile(path.join(__dirname, '../public/notes.html'))
}
)

// Create route: GET * should return the index.html file
router.get('/', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, '../public/index.html'))
}
)

module.exports = router;