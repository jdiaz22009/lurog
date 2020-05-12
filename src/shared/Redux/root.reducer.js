import { combineReducers } from 'redux'

// import reducer 
import user from './Reducer/user.reducer';


const ROOT_REDUCER = combineReducers({
  user
})
export default ROOT_REDUCER