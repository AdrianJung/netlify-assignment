import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 200px;
  

`
const GifBox = (props) => {
  return (
    <StyledImage src={props.url}/>
  )
}

export default GifBox
