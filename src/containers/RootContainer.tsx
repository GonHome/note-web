import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import { initRouter } from '../actions/RouterActions';
import { checkLogin } from '../actions/SessionActions';
import { initEnvironment } from '../actions/EnvironmentActions';
import * as RouterConstants from '../constants/RouterConstants';
import { getIsLogin, getRoute } from '../selectors/CommonSelectors';
import { routeTypes } from '../models/models';
import Root from '../components/Root';
import { KVMap, path } from '../models/models';

type propTypes = {
  initRouter: (paths: path[]) => void;
  checkLogin: () => void;
  paths: path[];
  route: routeTypes;
  isLogin: boolean;
  initEnvironment: () => void;
  routes: KVMap;
  headRoutes: KVMap;
};

const RootContainer = (props: propTypes) => (<Root { ...props }/>);

const mapStateToProps = (state: stateTypes) => ({
  paths: RouterConstants.paths,
  route: getRoute(state),
  isLogin: getIsLogin(state),
  routes: RouterConstants.routes,
  headRoutes: RouterConstants.headRoutes,
});

export default connect(
  mapStateToProps,
  {
    initRouter,
    initEnvironment,
    checkLogin,
  },
)(RootContainer);
