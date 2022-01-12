import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function NotesForDate({ match }) {
  let params = useParams();
  const [notes, setnotes] = useState("");
  let date = params.notedate;
  useEffect(() => {
    axios.post("/server/getnote", { date: date }).then((value) => {
      console.log(value.data.notes);
      setnotes(value.data.notes);
    });
  }, []);
  return (
    <div>
      <Header />
      <h1>Notes for {date}</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes === ""
          ? ""
          : notes.map((note) => {
              return (
                <div
                  style={{
                    backgroundColor: "grey",
                    padding: "10px",
                    width: "150px",
                    margin: "20px",
                  }}
                >
                  <span>Title: {note.title}</span>
                  <br />
                  <span>Description: {note.description}</span>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default NotesForDate;
