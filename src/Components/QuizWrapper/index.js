import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

 const QuizContainer = styled.div`
 
 .progressBar{
    height: 20px;  /* Can be anything */
	position: relative;

 }
 `
 const QuizWrapper = () => {
   return (
       <QuizContainer>
            <h1>
                GAME
            </h1>
            <div className="progressBar">
            <span className="progressFill"></span>
            </div>
       </QuizContainer>
   )
 }
 
 export default QuizWrapper

