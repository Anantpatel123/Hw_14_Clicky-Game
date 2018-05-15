import React from "react";
import "./CharactersCard.css";

const CharactersCard = props => {
 
  return (
    <div id="container">      
      <div className="card" 
      key={props.id} 
      onClick={() => props.charactersClicked(props.id, props.clicked)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>    
      </div>      
    </div>
  );
  
}

export default CharactersCard;
