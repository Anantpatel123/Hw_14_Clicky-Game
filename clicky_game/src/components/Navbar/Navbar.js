import React from "react";
import "./Navbar.css";

const Navbar = props => (  
  <nav className="navbar navbar-default fixed-top">
    <ul>
      <li><a href="/">Clicky Game</a></li> 
      <li className="winorLoose">Message: {props.winorLoose}</li>
      <li className="currScore">| Current Score: {props.currScore} |</li>      
      <li className="topScore">| Top Score: {props.topScore} |</li>
    </ul>    
  </nav> 
);

export default Navbar;
