import { combineReducers } from 'redux';
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
});
export type stateTypes = StateType<typeof rootReducer>;
export default rootReducer;
