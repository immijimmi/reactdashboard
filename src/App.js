import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import NotFound from "./components/NotFound/NotFound";
import NFTGallery from "./components/NFTGallery/NFTGallery"
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/nftbro" element={<NFTGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
