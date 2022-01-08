import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Homepage from './Homepage'
import NavBar from './NavBar'
import Accounts from './Accounts'
import SingleAccount from './SingleAccount'
import styled from 'styled-components'

const BlankDiv = styled.div`
  height: 3em;
`

const MainDiv = styled.div`
  padding: 2vw
`

export default () => {
  return (
    <Router>
      <NavBar />
      <BlankDiv />
      <MainDiv>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/accounts/:id' element ={<SingleAccount />} />
        </Routes>
      </MainDiv>
    </Router>
  )
}
