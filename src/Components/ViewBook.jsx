import { Container, Grid, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Head from "../Headers/Header";
import Footer from "../Headers/Footer";
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
                padding: "5%",
                boxShadow: "10px 10px 1px 1px rgba(100, 100, 100, 0.2)",
                margin: "3%",

                // border: "1px solid black",
              }}
            >
              <div
                key={book.id}
                // style={{ border: "1px solid black" }}
              >
                <Grid
                  container
                  style={{
                    textAlign: "left",
                    // border: "1px solid black",
                  }}
                >
                  <Grid
                    xs={4}
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      alignItems: "center",
                      // border: "1px solid black",
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

                  <Grid
                    xs={8}
                    style={{ padding: "10px",
                    //  border: "1px solid black" 
                    }}
                  >
                    <hr style={{ width: "100%" }} />
                    <h2>{book.title}</h2>
                    <p style={{ fontSize: "15px" }}> - {book.author}</p>
                    <p className="container">{book.description}</p>
                    <hr style={{ width: "100%" }} />
                    <Button
                      onClick={goToReviewPage}
                      style={{
                        display: "block",
                        // marginTop: "5%",
                        marginLeft: "20%",

                        width: "50%",
                        boxShadow: "2px 2px 5px rgb(122, 117, 101)",
                      }}
                    >
                      Write a Review
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        ))}
      <Footer />
    </>
  );
}

export default ViewBook;
