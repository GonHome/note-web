import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { createLogger } from 'redux-logger';
import reducers from '../reducers';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
// import rootEpic from './root-epic';
const loggerMiddleware = createLogger({ collapsed: true });

/* global window */
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = compose || (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose);

function configureStore(initialState?: {}) {
  // configure middlewares
  const middlewares = [createEpicMiddleware(), loadingBarMiddleware(), loggerMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(reducers, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
