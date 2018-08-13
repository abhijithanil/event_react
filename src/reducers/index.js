import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import signupReducer from './registrationReducer'
const login = combineReducers({
  loginReducer
  
})
const registration = combineReducers({
  signupReducer
})
export default combineReducers({
  login,
  registration
})