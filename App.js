
import React from 'react'
import 'react-native-gesture-handler'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import configureStore from './src/shared/Redux/config.store'


import Navigator from './src/routers'

const { store, persistor } = configureStore()

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
