import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function AllBooks() {
  const [bookData, setBookData] = useState([
    {
      id: 1,
      image: "",
      title: "Harry Potter and the cursed Child",
      author: "Jack Thorne",
    },
    {
      id: 2,
      image: "",
      title: "The Monk who sold his Ferrari",
      author: "Robin Sharma",
    },
    {
      id: 3,
      image: "",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: 4,
      image: "",
      title: "Heart of Darkness",
      author: "Joseph Conrad",
    },
    {
      id: 5,
      image: "",
      title: "A Passage to India",
      author: "E.M. Forster",
    },
    {
      id: 6,
      image: "",
      title: "Wolf Hall",
      author: "Hilary Mantel",
    },
    {
      id: 7,
      image: "",
      title: "SecondHand Time",
      author: "Svetlana Alexievich",
    },
    {
      id: 8,
      image: "",
      title: "Never Let Me Go",
      author: "Kazuo Ishiguro",
    },
    {
      id: 9,
      image: "",
      title: "Autum",
      author: "Ali Smith",
    },
    {
      id: 10,
      image: "",
      title: "Half of a Yellow Sun",
      author: "Chimamanda Ngozi Adichie",
    },
  ]);

  return (
    <>
      <div
        className="container bgs"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {bookData.map((book) => (
          <Card key={book.id} style={{ width: "20rem" }}>
            <Card.Img variant="top" src={book.image} />
            <Card.Body>
              <div style={{ textAlign: "left", marginBottom: ".10%" }}>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text> - {book.author}</Card.Text>
                <hr />
              </div>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default AllBooks;
