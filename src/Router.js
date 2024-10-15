import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import FindLiking from "./page/FindLiking";
import Archive from "./page/Archive";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />{" "}
        <Route path="/findliking" element={<FindLiking />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
