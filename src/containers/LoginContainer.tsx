import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import Login from '../components/Login';
import { login } from '../actions/SessionActions';

type propTypes = {
  login: () => void;
};

const LoginContainer = (props: propTypes) => <Login {...props} />;

const mapStateToProps = (state: stateTypes) => ({});

export default connect(
  mapStateToProps,
  {
    login,
  },
)(LoginContainer);
