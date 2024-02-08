const router = require('express').Router();// for creating a router object 
const fs = require('fs');
const uuid = require("uuid");

//gets notes saved and joins to db.json
router.get("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(notes);

});

//post function to add new notes
router.post("/api/notes", (req, res) => {
    const  notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});

router.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const delNotes = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(delNotes));
    res.json(delNotes);
});

module.exports = router;


