import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import watchFetchUser from './sagas';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension()
  )
);

sagaMiddleware.run(watchFetchUser);

export default store;
