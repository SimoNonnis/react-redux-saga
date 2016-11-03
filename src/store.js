import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import * as sagas from './sagas';



let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(createSagaMiddleware(...sagas)),
    window.devToolsExtension && window.devToolsExtension()
  )
);

export default store;
