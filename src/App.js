import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultQuery="New York"/>
      <footer>This project was coded by Catarina S-A and is {""}
      <a href="https://github.com/casakc/week5-react" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a></footer>
    </div>
    </div>
  );
}

 
