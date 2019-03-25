import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import GifBoxWrapper from '../GifBoxWrapper';

 const StyledDiv = styled.div`
 
 .progressBar{
    height: 20px;
	position: relative;

 }
 `

 const QuizWrapper = () => {
   return (
       <StyledDiv>
            <GifBoxWrapper/>
       </StyledDiv>
   )
 }
 
 export default QuizWrapper

