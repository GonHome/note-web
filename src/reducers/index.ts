import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import { StateType } from 'typesafe-actions';
import router from './router';
import session from './session';
import environment from './environment';
import app from './app';

const rootReducer = combineReducers({
  router,
  session,
  environment,
  app,
  loadingBar: loadingBarReducer,
});
export type stateTypes = StateType<typeof rootReducer>;
export default rootReducer;
