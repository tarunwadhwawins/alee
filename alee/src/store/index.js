/*********************************************************************************************
 * Created By : Saddam Husain
 * Created Date : 02/05/2021
 * Description : Configure store for application by proving root reducer.
 **********************************************************************************************/

import { createStore, applyMiddleware, compose } from 'redux';
//import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// Package used for persist store data when page is refershed.
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiMiddleware from "./middleware/api.middleware";
import * as env from '../config/env.config';

// set persist configutation 
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    // Define reducers those data need to be retain after refersh of page.
    "global",
    "auth"
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const middleware = [thunk, apiMiddleware];
  // redux devtools
  const enhancers =
    (env.NODE_ENV === "production")
      ? applyMiddleware(...middleware)
      : compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
  // create redux store
  const store = createStore(persistedReducer, enhancers);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
