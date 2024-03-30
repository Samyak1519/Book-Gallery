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
            <Route path="/" Component={Home} exact />
            <Route path="/Home" Component={Home} exact />
            <Route path="/Startpage" Component={StartPage} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
