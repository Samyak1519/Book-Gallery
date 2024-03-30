import { Container, Grid, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Head from "../Headers/Header";

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
            padding: "3%",
          }}
        >
          <div key={book.id}>
            <Grid container spacing={3} style={{ textAlign: "left" }}>
              <Grid
                xs={4}
                style={{
                  textAlign: "center",
                  padding: "10px",
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

              <Grid xs={8} style={{ paddingLeft: "10px" }}>
                <h4>Review Book</h4>
                <hr style={{ width: "100%" }} />
                <div className="container" style={{ paddingLeft: "5%" }}>
                  <TextField
                    id="standard-textarea"
                    label="Write your comment."
                    placeholder="Write your comment."
                    multiline
                    variant="standard"
                    style={{ width: "60%" }}
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
                    style={{ width: "60%" }}
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
    </>
  );
}

export default ReviewBook;
