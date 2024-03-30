import React from "react";
import { Link } from "react-router-dom";
import "./HeadStyle.css";

function Head() {
  return (
    <>
      <div>
        <header className="headerShadow">
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
