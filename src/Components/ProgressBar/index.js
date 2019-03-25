import styled, { keyframes } from 'styled-components'
import React from 'react'

const fill = keyframes`
     0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
`;

const StyledDiv = styled.div`

.progress-bar {
    border: 1px solid goldenrod;
    height: 20px;
    width: 300px;

    .fill {
        ${props => props.newRound && 'border: 2px solid black'}
      height: 100%;
      background-color: goldenrod;
    }
}
`;

const progressBar = () => {
  return (
    <StyledDiv >
        <div className="progress-bar">
            <div className="fill"></div>
         </div>
    </StyledDiv>
  )
}

export default progressBar
