const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  date: String,
  notes: [{ title: String, description: String }],
});

const Note = mongoose.model("note", noteSchema);

module.exports = Note;
