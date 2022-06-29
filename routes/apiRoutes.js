const router = require('express').Router();
const notes = require('../db/db.json');

// Create a new note
router.post('/notes', (req, res) => {

});
// Read all notes
router.get('/notes', (req, res) => {
  res.json({
    message: 'sending notes',
    body: notes
  })
});
// Delete a note
router.delete('/notes/:id', (req, res) => {});

module.exports = router
