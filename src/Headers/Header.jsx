import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeadStyle.css";
function Head() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("./Home");
  };
  return (
    <>
      <div>
        <header className="headerShadow">
          <h1 onClick={goToHome}>Book Gallery</h1>
          <h3>
            Hello,
            <h5>Samyak ;)</h5>
          </h3>
        </header>
      </div>
    </>
  );
}

export default Head;
