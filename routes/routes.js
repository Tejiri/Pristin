const express = require("express");
const Note = require("../models/note");
const routes = express.Router();

routes.route("/").post((req, res) => {
  let message = {
    name: "success",
    message: "note uploaded",
  };
  console.log("Posted");
  console.log(req.body);
  let dataToSend = {
    title: req.body.title,
    description: req.body.description,
  };

  Note.findOne({ date: req.body.date }, (err, doc) => {
    if (doc === null) {
      const note = new Note({
        date: req.body.date,
        notes: [dataToSend],
      });
      note.save();
      res.json(message);
    } else {
      Note.findOneAndUpdate(
        { date: req.body.date },
        { $push: { notes: dataToSend } },
        (err, doc) => {
          if (err) {
            console.log(err);
          } else {
            console.log(doc);
            res.json(message);
          }
        }
      );
    }
  });
});

routes.route("/server/getnotes").post((req, res) => {
  Note.find((err, doc) => {
    res.json(doc);
  });
});

routes.route("/server/getnote").post((req, res) => {
  console.log(req.body);
  Note.findOne({ date: req.body.date }, (err, doc) => {
    if (err) {
      res.json(err);
    } else {
      res.json(doc);
    }
  });
});

module.exports = routes;
