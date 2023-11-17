import React from "react";
//import ReactDOM from 'react-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home username="Maddie" city="NYC"/>
      <About />
    </div>
  );
}

export default App;
