import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import StartPage from "./Components/StartPage";

export const MyContext = createContext();
function App() {
  const [contextValue, setContextValue] = useState("User");
  return (
    <>
      <div className="background">
        <BrowserRouter>
          <MyContext.Provider value={{ contextValue, setContextValue }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              {/* Render StartPage as a child component */}
              <Route path="/Startpage" element={<StartPage />} />
            </Routes>
          </MyContext.Provider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
