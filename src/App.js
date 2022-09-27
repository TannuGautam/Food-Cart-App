import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import "../src/components/style.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="/cart" element={<CardsDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
