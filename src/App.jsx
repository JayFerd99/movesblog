import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./blogs/pages/Header";
import FirstPage from "./blogs/pages/Firstpage";
import LatestNews from "./blogs/pages/LatestNews";
import Products from "./blogs/pages/Products";

const App = () => {
  return (
    <Fragment>
  
      <Header />
      <Routes>
        <Route path="/" exact element={<FirstPage />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/product-reviews" element={<Products />} />
      </Routes>
    </Fragment>
  );
};

export default App;
