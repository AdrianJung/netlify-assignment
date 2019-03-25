import styled from 'styled-components';
import React, { Component } from 'react'
import GifBox from '../GifBox'

const StyledDiv  = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  justify-content: space-around;
`;


export default class GifBoxWrapper extends Component {
  render() {
    return (
      <StyledDiv>
        <GifBox />
      </StyledDiv>
    )
  }
}

