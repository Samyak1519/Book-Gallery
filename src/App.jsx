import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import ReviewBook from "./Components/ReviewBook";
import StartPage from "./Components/StartPage";
import ViewBook from "./Components/ViewBook";

function App() {
  return (
    <>
      <div className="background">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<StartPage />} />
            <Route path="/Startpage" element={<StartPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Viewbook/:id" element={<ViewBook />} />
            <Route path="/ReviewBook" element={<ReviewBook />} />
            <Route path="viewbook/:id/ReviewBook" element={<ReviewBook />} />
            <Route element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
