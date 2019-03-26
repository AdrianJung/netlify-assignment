import React, { Component } from 'react'
import styled from 'styled-components'
import GifBoxWrapper from '../GifBoxWrapper'


const randomNumber = () => {
  return Math.floor(Math.random() * Math.floor(5));
}

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 2px;
  border: none;
  order:${randomNumber};
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  ${props => props.highlighted && 'border: 2px solid black'}
`



export default class GifBox extends Component {
  
  state = {
    isClicked: false,
  }
  
  correctAnswer = (e) => {
    this.props.choseRightAnswer()
  }

  wrongAnswer = () => {
    this.props.choseWrongAnswer()
  }
  
  handleClick = (e) => {
    this.setState({
      isClicked: !this.state.isClicked
    })
    this.props.isCorrect ? this.correctAnswer() : this.wrongAnswer()
  }

  render() {
    return (
      <StyledImage data-id={this.props.id} src={this.props.url} onClick={this.handleClick}/>
    )
  }
}