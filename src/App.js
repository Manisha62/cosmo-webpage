import React from "react";
import "./index.css";
import Home from "./Component/Home";
import Signin from "./Component/Signin";
import About from "./Component/About";
import { BrowserRouter as  Route,Routes,Link } from 'react-router-dom';


function App() {
  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signin">Signin</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
