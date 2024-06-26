import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({ name: "" });

  const goToHome = () => {
    navigate("/Home");
  };

  function changeHandle(e) {
    setInputData({ ...inputData, 
      [e.target.name]: e.target.value });
  }

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

          <Container
            style={{
              textAlign: "center",
              // , border: "1px white solid"
            }}
          >
            <div
              className="container"
              style={{
                marginTop: "80px",
                height: "300px",
                width: "50%",
                padding: "20px",
                color: "whitesmoke",
              }}
            >
              Enter your name to start
              <Container
                style={{
                  padding: "12%",
                }}
              >
                <input
                  type="text"
                  name="name"
                  value={inputData.name}
                  onChange={changeHandle}
                  placeholder="Enter your Good Name"
                  className="form-control"
                  style={{
                    width: "100%",
                  }}
                />
                <button
                  onClick={goToHome}
                  className="btn btn-success"
                  style={{
                    marginTop: "5%",
                    display: "block",
                    width: "100%",
                    boxShadow: "2px 2px 5px rgb(122, 117, 101)",
                  }}
                >
                  Enter to the gallery
                </button>
              </Container>
            </div>
          </Container>
        </header>
      </div>
    </>
  );
}
export default StartPage;
