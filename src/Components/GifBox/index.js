import React, { Component } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 1px;
  opacity: 0.5;
  ${props => props.highlighted && 'opacity: 1'}
`


export default class GifBox extends Component {
  
  state = {
    isClicked: false,
    win: false
  }
  correctAnswer = (e) => {
   console.log("CORRECT")
   console.log(e.currentTarget.parentElement)
   this.setState({
     win: true
    })
    
  }
  wrongAnswer = () => {
    console.log("WRONG")
    
  }
  
  handleClick = (e) => {
    this.setState({
      isClicked: !this.state.isClicked
    })
    this.props.isCorrect ? this.correctAnswer() : this.wrongAnswer()
    console.log(this.state.win)
  }

  render() {
    return (
      <StyledImage data-id={this.props.id} highlighted={this.state.isClicked} src={this.props.url} onClick={this.handleClick}/>
    )
  }
}

