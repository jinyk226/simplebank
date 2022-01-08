import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { connect } from 'react-redux'

import { viewAccounts } from '../redux/accounts'

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const AllAccountsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: auto;
`

const StyledLink = styled(Link)`
  font-size: 1.5em;
  font-weight: bold;
  color: black;
`
const Container = styled.div`
  box-sizing: border-box;
  padding: 25px 50px;
  margin: 0px;
  text-align: center;
  width: 50%;
  &:hover {
    background-color: #d6d6d6b6;
  }
`

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
`

class Accounts extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.viewAccounts()
  }

  render() {
    const { accounts } = this.props
    return (
      <CenterDiv>
        { accounts.length ? (
        <FlexContainer>
          <AllAccountsContainer>
            {accounts.map((account) => {
              return (
                <Container key={account.id}>
                  <StyledLink to={`/accounts/${account.id}`}>{account.owner}</StyledLink>
                  <br/>
                  <div>Amount: {account.balance}</div>
                  <div>Currency: {account.currency}</div>
                </Container>
              )
            })}
          </AllAccountsContainer>
        </FlexContainer>) : (<FlexContainer><h2>Loading...</h2></FlexContainer>)}
      </CenterDiv>
    )
  }
}

const mapState = (state) => {
  return {
    accounts: state.accounts
  }
}

const mapDispatch = (dispatch) => {
  return {
    viewAccounts: () => {dispatch(viewAccounts())}
  }
}

export default connect(mapState, mapDispatch)(Accounts);
