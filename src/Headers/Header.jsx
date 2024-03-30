import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

function Head() {
  return (
    <>
      <div>
        <header>
          <h1>Book Gallery</h1>
          <nav style={{ color: "black" }}>
            <Link href="#">Home</Link>
            <Link href="#">Add Books</Link>
            <Link href="#">All Books</Link>
            <Link href="#">Start Page</Link>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Head;
