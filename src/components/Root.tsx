import * as React from 'react';
import { KVMap, path } from '../models/models';
import { routeTypes } from '../reducers/router';
import LoginContainer from '../containers/LoginContainer';
import HeadContainer from '../containers/HeadContainer';
import ToolbarContainer from '../containers/ToolbarContainer';
import AppContainer from '../containers/AppContainer';
import DialogContainer from '../containers/DialogContainer';
import LoadingContainer from '../containers/LoadingContainer';
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

class Root extends React.Component<propTypes> {
  componentDidMount() {
    const {
      initRouter, paths, initEnvironment, checkLogin,
    } = this.props;
    window.onhashchange = () => {
      initRouter(paths);
    };
    checkLogin();
    initRouter(paths);
    initEnvironment();
    window.onresize = () => initEnvironment();
  }

  render() {
    const {
      isLogin,
    } = this.props;
    let root;
    if (isLogin) {
      root = (
        <div className="body theme-light">
          <HeadContainer />
          <ToolbarContainer />
          <LoadingContainer />
          <AppContainer />
          <DialogContainer />
        </div>
      );
    } else {
      window.location.href = '#/login';
      root = <LoginContainer />;
    }
    return root;
  }
}

export default Root;
