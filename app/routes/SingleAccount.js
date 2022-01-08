import React from 'react';
import { connect } from 'react-redux'
import { viewAccount, _viewAccount } from '../redux/account'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

const CenterDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
`

const SingleAccount = (props) => {
    let params = useParams();
    console.log(params.id);
    props.viewAccount(params.id)

    let account = props.account

    return account.id ? (
      <CenterDiv>
        <h2>{account.owner}</h2>
        <div>Balance: {account.balance}</div>
        <div>Currency: {account.currency}</div>
      </CenterDiv>
    ) : (<div>Loading...</div>)
}

const mapState = (state) => {
  return {
    account: state.account
  }
}

const mapDispatch = (dispatch) => {
  return {
    viewAccount: (id) => dispatch(viewAccount(id))
  }
}

export default connect(mapState, mapDispatch)(SingleAccount)
