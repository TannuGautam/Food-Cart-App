import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import "../src/components/style.css";
import store from './store';
import {Provider} from "react-redux";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="/cart/:id" element={<CardsDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
