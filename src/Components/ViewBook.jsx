import { Container, Grid, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Head from "../Headers/Header";
import bookData from "./BookDetils.json";

function ViewBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState(["books"]);

  const goToReviewPage = () => {
    navigate("./ReviewBook");
  };

  return (
    <>
      <Head />
      {book &&
        bookData.map((book) => (
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
                    <Typography component="legend">Ratings</Typography>
                    <Rating
                      name="read-only"
                      value={parseInt(book.ratings)}
                      readOnly
                    />
                    <hr style={{ width: "100%" }} />
                  </Grid>

                  <Grid xs={8} style={{ padding: "10px" }}>
                    <hr style={{ width: "100%" }} />
                    <h2>{book.title}</h2>
                    <p style={{ fontSize: "15px" }}> - {book.author}</p>
                    <p className="container">{book.description}</p>
                    <hr style={{ width: "100%" }} />
                    <Button onClick={goToReviewPage}>Write a Review</Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        ))}
    </>
  );
}

export default ViewBook;
