import { Container, Grid, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Head from "../Headers/Header";
import Footer from "../Headers/Footer";

function ReviewBook() {
  const [book, setBook] = useState({
    id: 1,
    image: "../public/png Harry potter and the cursed child.jpeg", // Add the book image URL
    title: "Title", // Add the book title
    author: "Author", // Add the book author
    ratings: 0, // Initialize the ratings
  });
  const [value, setValue] = useState(0); // State for controlling the rating value

  const handleSave = () => {
    // Logic to save the review
    console.log("Book reviewed:", book);
  };

  return (
    <>
      <Head />
      <div className="container">
        <Container
          style={{
            backgroundColor: "whitesmoke",
            height: "30%",
            width: "100%",
            borderRadius: "10px",

            boxShadow: "10px 10px 1px 1px rgba(100, 100, 100, 0.2)",
          }}
        >
          <div
            key={book.id}
            className="container"
            style={{
              padding: "3%",
              paddingTop: "1%",
              textAlign: "center",
              // border: "2px solid black",
            }}
          >
            <h3
              style={{
                marginTop: "2%",
                fontSize: "35px",
                fontWeight: "normal",
              }}
            >
              Review Book
            </h3>
            <Grid
              container
              style={{
                marginTop: "2%",
                textAlign: "left",
                // border: "3px dotted black",
              }}
            >
              <Grid
                xs={4}
                style={{
                  // border: "1px solid black",
                  textAlign: "center",
                  padding: "5px",
                  alignItems: "center",
                }}
              >
                <hr style={{ width: "100%" }} />
                <Image
                  src={book.image}
                  alt={book.title}
                  fluid
                  rounded
                  style={{ height: "200px", width: "100px" }}
                />
                <hr style={{ width: "50%", marginLeft: "25%" }} />
                <h3>Title: {book.title}</h3>
                <p style={{ fontSize: "15px" }}>Author: {book.author}</p>
                <hr style={{ width: "100%" }} />
              </Grid>

              <Grid
                xs={8}
                style={{
                  padding: "5px",
                  // border: "1px solid black"
                }}
              >
                <hr style={{ width: "100%" }} />
                <div className="container" style={{ paddingLeft: "5%" }}>
                  <TextField
                    id="standard-textarea"
                    label="Write your comment."
                    placeholder="Write your comment."
                    multiline
                    variant="standard"
                    style={{ width: "70%" }}
                  />
                  <br />
                  <br />
                  <TextField
                    id="standard-textarea"
                    label="Write your review."
                    placeholder="Write your review."
                    multiline
                    variant="standard"
                    rows={2}
                    style={{ width: "70%" }}
                  />
                  <br />
                  <br />
                  <Typography component="legend">Rate this book:</Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      setBook((prevBook) => ({
                        ...prevBook,
                        ratings: newValue,
                      }));
                    }}
                  />
                </div>
                <hr style={{ width: "100%" }} />
                <div className="container" style={{ paddingLeft: "20%" }}>
                  <Button
                    onClick={handleSave}
                    style={{
                      display: "block",
                      marginTop: "5%",
                      width: "60%",
                      boxShadow: "2px 2px 5px rgb(122, 117, 101)",
                    }}
                  >
                    Save
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default ReviewBook;
