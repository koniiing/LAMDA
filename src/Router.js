import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindLiking from "./page/FindLiking";
import Archive from "./page/Archive";
import LoadingScreen from "./component/common/loading";
import HowWorks from "./page/HowWorks";
import Result from "./page/Result";
import Home from "./page/Home";
import WhereItAllBegan from "./page/WhereItAllBegan";
import ScrollToTop from "./component/common/ScrollToTop";
import Credit from "./page/Credit";

function AppRouter() {
  return (
    <Router>
      {" "}
      <ScrollToTop />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />{" "}
        <Route path="/findliking" element={<FindLiking />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/howworks" element={<HowWorks />} />
        <Route path="/result" element={<Result />} />
        <Route path="/inspiration" element={<WhereItAllBegan />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
