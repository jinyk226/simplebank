import Axios from "axios";

const VIEW_ACCOUNTS = 'VIEW_ACCOUNTS'
const ADD_ACCOUNT = 'ADD_ACCOUNT'

const _viewAccounts = (accounts) => {
  return {
    type: VIEW_ACCOUNTS,
    accounts
  }
}

const _addAccount = (account) => {
  return {
    type: ADD_ACCOUNT,
    account
  }
}

export const viewAccounts = (pageId = 1, pageSize = 5) => {
  return async (dispatch) => {
    const { data: accounts } = await Axios.get(`http://localhost:8080/accounts/?page_id=${pageId}&page_size=${pageSize}`)
    dispatch(_viewAccounts(accounts))
  }
}

export const addAccount = (id) => {
  return async (dispatch) => {
    const { data: account } = await Axios.get(`http://localhost:8080/accounts/${id}`)
    dispatch (_addAccount(account))
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case VIEW_ACCOUNTS:
      return action.accounts
    case ADD_ACCOUNT:
      return [...state, action.account]
    default:
      return state
  }
}
