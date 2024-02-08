const express = require('express');
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');
const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


//Below is all of my code before serparating them into different middleware files.

//importing all of the files required
// const express = require('express');
// const htmlRoutes = require('./routes/html-routes');
// const apiRoutes = require('./routes/api-routes');
// const PORT = process.env.PORT || 3001;

// const app = express();

//middle
//routes
//applisten
//app.use(api)

//test with all data on one page
// const express = require("express");
// const fs = require("fs");
// const notes = require('./db/db.json');
// const path = require("path");
// const uuid = require("uuid");

// const app = express();
// const PORT = process.env.PORT || 3001;

// //Middleware
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(express.static("public"));

// //gets notes saved and joins to db.json
// app.get("/api/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "/db/db.json"))
// });

// //post function to add new notes
// app.post("/api/notes", (req, res) => {
//     const   notes = JSON.parse(fs.readFileSync("./db/db.json"));
//     const newNotes = req.body;
//     newNotes.id = uuid.v4();
//     notes.push(newNotes);
//     fs.writeFileSync("./db/db.json", JSON.stringify(notes));
//     res.json(notes);
// });

// app.delete("/api/notes/:id", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("./db/db.json"));
//     const delNotes = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
//     fs.writeFileSync("./db/db.json", JSON.stringify(delNotes));
//     res.json(delNotes);
// })

// //HTML calls
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public.notes.html"));
// });

// app.listen(PORT, function () {
//     console.log("App Listening on PORT: " + PORT);
// });