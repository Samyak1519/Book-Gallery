import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import StartPage from "./Components/StartPage";

function App() {
  return (
    <>
      <div className="background">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Startpage" element={<StartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
