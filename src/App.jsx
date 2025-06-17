import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Liked from "./Pages/Liked";
import PlayList from "./Pages/PlayList";
import Nav from "./Component/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
