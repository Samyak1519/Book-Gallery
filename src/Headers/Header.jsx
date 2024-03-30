import React, { useContext } from "react";
import "./HeadStyle.css";
import { MyContext } from "../App";
function Head() {
  const inputValue = sessionStorage.getItem("inputValue");
  // const { contextValue, setContextValue } = useContext(MyContext);

  return (
    <>
      <div>
        <header className="headerShadow">
          <h1>Book Gallery</h1>
          <h3>
            Hello,
            <h5
            // style={{  }}
            >
              User
              {/* {contextValue} */}
            </h5>
          </h3>
        </header>
      </div>
    </>
  );
}

export default Head;
