import "./App.css";
import {Routes, Route, Link, BrowserRouter } from "react-router-dom";
import {HomePage} from "./HomePage";
import {Apple} from "./Apple";
import { NotFound } from "./NotFound";

const App = () => (
  <BrowserRouter>
  <div>
    <Link to="/" style={{marginLeft: 7,}}>Home</Link>
    <Link to="/apple" style={{marginLeft: 10,}}>Apple</Link>
  </div>

  <Routes>
    <Route Path="/" element={<HomePage/>}></Route>
    <Route Path="/apple" element={<Apple/>}></Route>
  </Routes>
  <NotFound/>

  </BrowserRouter>
  
);

export default App;
