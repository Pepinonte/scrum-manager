import React from "react";
import { Navigate, Routes, Route, useParams } from "react-router-dom";

import Home from "./pages/home";
import JoinedPage from "./pages/JoinedPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joinedPage/:partieId" element={<JoinedPage />} />
      </Routes>
    </div>
  );
}

export default App;
