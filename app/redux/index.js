import { combineReducers } from 'redux'

import accountsReducer from './accounts'
import accountReducer from './account'

const appReducer = combineReducers({
  accounts: accountsReducer,
  account: accountReducer
})

export default appReducer
