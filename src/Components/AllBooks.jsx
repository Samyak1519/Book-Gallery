import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import bookData from "./BookDetils.json";

function AllBooks() {
  const navigate = useNavigate();
  const goToBookDetailsPage = (id) => {
    navigate("/ViewBook/$(id)");
  };

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
          <Card
            key={book.id}
            style={{ width: "20rem" }}
            onClick={() => {
              goToBookDetailsPage(book.id);
            }}
          >
            <Card.Img variant="top" src={book.image} />
            <hr />
            <Card.Body>
              <div style={{ textAlign: "left", marginBottom: ".10%" }}>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text> - {book.author}</Card.Text>
              </div>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default AllBooks;
