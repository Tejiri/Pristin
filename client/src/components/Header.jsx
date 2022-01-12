import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#02b3ad",
        placeItems: "center",
        padding:'20px'
      }}
    >
      <h2 style={{ margin: "0px",padding:'0px' }}>Pristin</h2>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Header;
