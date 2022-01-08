import Axios from 'axios'

const VIEW_ACCOUNT = 'VIEW_ACCOUNT'

export const _viewAccount = (account) => {
  return {
    type: VIEW_ACCOUNT,
    account
  }
}

export const viewAccount = (id) => {
  return async (dispatch) => {
    const { data:account } = await Axios.get(`http://localhost:8080/accounts/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "true"
      }
    })
    dispatch(_viewAccount(account))
  }
}

export default (state = {}, action) => {
  switch(action.type) {
    case VIEW_ACCOUNT:
      return action.account
    default:
      return state
  }
}
