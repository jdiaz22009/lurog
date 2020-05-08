import { combineReducers } from 'redux'

// import reducer 
import userReducer from './Reducer/user.reducer';


const ROOT_REDUCER = combineReducers({
  userReducer
})
export default ROOT_REDUCER