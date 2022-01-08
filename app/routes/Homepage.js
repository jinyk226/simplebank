import React from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  background: ${props => props.primary ? "maroon" : "white"};
  color: ${props => props.primary ? "white" : "maroon"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid maroon;
  border-radius: 3px;
  cursor: pointer;
`

export default (props) => {
  return (
    <CenterDiv>
      <br/>
      <div style={{textAlign:'center'}}>Welcome! Click the navigation links at the top to view server's accounts</div>
    </CenterDiv>
  )
}
