import React, { Component } from 'react';
// import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CharactersCard from "./components/CharactersCard";
import Characters from "./Characters.json";
import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {
  state = {
    Characters: Characters,
    currScore: 0,
    winorLoose: "",
    topScore: 0    
  }

  charactersClicked = (id, clicked) => {
      this.state.winorLoose="";
    let CharArray = this.state.Characters;   
    
    if (clicked) {
        CharArray.forEach((Char, i) => {
        CharArray[i].clicked = false;
      });
			this.setState({
				Char: CharArray.sort(() => Math.random() - 0.5),
        winorLoose: "Sorry You Lost!!!",        
        currScore: 0        
      })
    }
    
    else {      
			CharArray.forEach((Char, index) => {
				if (id === Char.id) {
					CharArray[index].clicked = true;
				}
			});
           
      const newScore = this.state.currScore + 1;  
      this.setState({currScore: newScore});
      
      if(newScore >= this.state.topScore) {
        this.setState({topScore: newScore})
        if(newScore === 12){
          this.setState({winorLoose: "YOU WIN!!!!!!!"})
        }
      }     
      
      this.setState.Char= CharArray.sort(() => Math.random() - 0.5);			   
		}       
   
  };//charactersClicked end here.


  render() {
    return (
      <div>
        <Navbar         
          currScore={this.state.currScore}
          topScore={this.state.topScore}
          winorLoose={this.state.winorLoose}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.Characters.map((Char) => {
              return <CharactersCard                
                key={Char.id}
                id={Char.id}       
                clicked={Char.clicked}                 
                image={Char.image}   
                charactersClicked={this.charactersClicked}                     
              />;              
            })}        
        </Wrapper>
      </div>      
    );// return ends here
  }// render ends here
}// class app end here

export default App;
