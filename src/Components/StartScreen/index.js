import React from 'react'
import styled, {keyframes } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const GameHeader = styled.div`
display: flex;
height: 60vh;
justify-content: center;
flex-direction: column;
align-items: center;

h1{
    font-size: 50px;
    margin-bottom: 40px;
}

p {
    position: absolute;
    top: 50px;
    left: 190px;
    font-size: 20px;
}
.logoHeader {
    animation: ${FadeIn} 2s linear forwards;
    
    
}
button {
    background-color: inherit;
    border: 3px solid black;
    height: 40px;
    width: 120px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        transform: scale(1.08);
    }
}
`

 
 const StartScreen = () => {
   return (
       <GameHeader>
           <div className="logoHeader">
            <h1>
                GIPHYQUIZ
                <p>
                    celebrities
                </p>
            </h1>
           </div>
           <Link to="/Game" style={{textDecoration: 'none', color: 'inherit'}}>
           <button>
               Start Game
           </button>
           </Link>
       </GameHeader>
   )
 }
 
 export default StartScreen

