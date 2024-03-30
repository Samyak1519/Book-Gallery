import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/Home");
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1
            style={{
              fontSize: "50px",
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              padding: "15px",
              textAlign: "center",
            }}
          >
            Welcome to
            <p style={{ fontFamily: "'Courier New', Courier, monospace" }}>
              Book Gallery
            </p>
          </h1>

          <Container>
            <div
              style={{
                marginTop: "80px",
                height: "300px",
                width: "50%",
                padding: "20px",
                color: "whitesmoke",
              }}
            >
              Enter your name to start
              <input
                type="text"
                className="form-control"
                style={{
                  height: "27px",
                  width: "100%",
                  marginLeft: "5%",
                  marginTop: "20px",
                }}
              />
              <button
                onClick={goToHome}
                className="btn btn-success"
                style={{
                  marginTop: "10px",
                  boxShadow: "2px 2px 5px rgb(122, 117, 101)",
                }}
              >
                Enter to the gallery
              </button>
            </div>
          </Container>
        </header>
      </div>
    </>
  );
}

export default StartPage;
