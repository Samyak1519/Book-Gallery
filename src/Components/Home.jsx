import React from "react";
import { useNavigate } from "react-router-dom";
import StartPage from "./StartPage";
import Header from "../Headers/Header";

function Home() {
  const navigate = useNavigate();

  const startpage = () => {
    navigate("/StartPage");
  };

  return (
    <>
      <h1>Homepage</h1>
      <button onClick={startpage}>Go to Start page</button>
      <hr />
      <Header />
    </>
  );
}

export default Home;