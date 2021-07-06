import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Library used for connect react app to reducer.
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';
import { PersistGate } from "redux-persist/lib/integration/react";

let { store, persistor } = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
);