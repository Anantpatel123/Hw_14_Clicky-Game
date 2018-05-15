import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">
        <h1 className="display-4">Clicky Game</h1>
        <h3 className="display-5">Test Your Memory</h3>
        <h3 className="lead">Click on any image to earn a point, but don't click on the same picture more than once. 
        Click all 12 pics, and you win.</h3>           
    </div>   
);

export default Jumbotron;
