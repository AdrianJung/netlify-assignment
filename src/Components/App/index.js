import React, { Component } from "react";
import Header from "../Header"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuizWrapper from '../QuizWrapper';
import StartScreen from '../StartScreen';
import GifBox from '../GifBox';
import GifBoxWrapper from "../GifBoxWrapper";

class App extends Component {
    
    render() {  
    return (
      <div className="App">
          <Header />
          <Route exact path="/" component={StartScreen} />
          <Route path="/Game" component={QuizWrapper}/>
      </div>
    );
  }
}

export default App
