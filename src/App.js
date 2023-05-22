import React from "react";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Apple from "./Components/Apple";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Demo from "./Components/Demo";
import logo from "./Components/assest/img1.png"

const App = () => (
  <BrowserRouter>
  <img src ={logo} className="logo" alt="" width={100} height={100}/>
  <Apple/>
    <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/apple">
        Apple
      </Link>
    </div>

    <Routes>
      <Route Path="/" element={<HomePage />}></Route>
      <Route Path="/apple" element={<Apple />}></Route>
    </Routes>
    <NotFound />
    <Demo/>
  </BrowserRouter>
);

export default App;
