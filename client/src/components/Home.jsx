import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Home() {
  const [date, setdate] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [notes, setnotes] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    axios.post("/server/getnotes").then((value) => {
      // console.log(value.data);
      setnotes(value.data);
    });
  }, []);

  const NoteDate = ({ noteDate }) => {
    // for (const key in notes) {
    //   console.log(notes[key]);
    // }
    return (
      <div
        onClick={(e) => {
          console.log(noteDate);
          navigate("/note/" + noteDate);
        }}
      >
        note for {noteDate}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <form
        action=""
        method="post"
        style={{ padding: "30px" }}
        onSubmit={(event) => {
          event.preventDefault();
          let data = {
            date: date,
            title: title,
            description: description,
          };
          axios.post("/", data).then((value) => {
            window.location.reload();
          });
        }}
      >
        <h3>Add Note</h3>
        <label htmlFor="">Date: </label>
        <input
          required
          type="date"
          name="date"
          id=""
          onChange={(event) => {
            setdate(event.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Title: </label>
        <input
          required
          type="text"
          name="title"
          id=""
          onChange={(event) => {
            settitle(event.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Description: </label>
        <input
          required
          type="text"
          name="description"
          id=""
          onChange={(event) => {
            setdescription(event.target.value);
          }}
        />

        <br />
        <input type="submit" value="Add note" />

        <h2>All my notes</h2>
        <h3>Click to display notes for a given date</h3>

        <div style={{ display: "flex" }}>
          {notes === ""
            ? ""
            : notes.map((note) => {
                console.log(note);
                return (
                  <div
                    key={note._id}
                    style={{
                      backgroundColor: "#0a2332",
                      color: "white",
                      margin: "20px 20px",
                      padding: "10px",
                      width: "200px",
                    }}
                  >
                    <NoteDate key={note._id} noteDate={note.date} />
                    {/* <br /> */}
                  </div>
                );
              })}
        </div>
      </form>
    </div>
  );
}

export default Home;
