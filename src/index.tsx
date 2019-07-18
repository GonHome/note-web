import 'tslib';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import RootContainer from './containers/RootContainer';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const ROOT = () => (
  <div>
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </div>
);
render(<ROOT />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
