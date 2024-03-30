import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Headers/Header";
import AllBooks from "./AllBooks";

function Home() {
  const navigate = useNavigate();

  const startpage = () => {
    navigate("/StartPage");
  };

  return (
    <>
      <Header />
      <button onClick={startpage}>Go to Start page</button>
      <hr />
      <AllBooks />
    </>
  );
}

export default Home;
