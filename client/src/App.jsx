import Home from "./components/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotesForDate from "./components/NotesForDate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/note/:notedate" element={<NotesForDate />} />
    </Routes>
  );
}

export default App;
