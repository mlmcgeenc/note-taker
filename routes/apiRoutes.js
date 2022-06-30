const router = require('express').Router();
const { notes } = require('../db/db.json');
const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
	const note = body;
	notesArray.push(note);
	fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({ notes: notesArray }, null, 2));
}

function deleteNote(id, notesArray) {
	console.log(`deleteNote note ID = ${id}`);
  notesArray.forEach((note, index)=> {
    if (note.id === id) {
      notesArray.splice(index, 1)
    }
  })
  console.log(notesArray)
	fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({ notes: notesArray}, null, 2));
}

// Create a new note
router.post('/notes', (req, res) => {
	console.log(`router.post('/notes') fired with ${req.body}`);
	req.body.id = (notes.length + 1).toString();
	const note = createNewNote(req.body, notes);
	res.json(note);
});
// Read all notes
router.get('/notes', (req, res) => {
	console.log(`router.get('/notes') fired`);
	res.json(notes);
});

// Delete a note
router.delete('/notes/:id', (req, res) => {
	console.log(`router.delete('/notes') fired with id: ${req.params.id}`);
	const note = deleteNote(req.params.id, notes);
  res.json(note)
});

module.exports = router;
