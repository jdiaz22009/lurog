import AsyncStorage from '@react-native-community/async-storage'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'

import ROOT_REDUCER from './root.reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, ROOT_REDUCER)

const configureStore = (initialState) => {
  let store = createStore(persistedReducer, initialState, compose(applyMiddleware(createLogger()), applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore