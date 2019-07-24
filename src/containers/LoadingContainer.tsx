import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import HeadLoading from '../components/HeadLoading';

type propTypes = {
};

const LoadingContainer = (props: propTypes) => <HeadLoading {...props} />;

const mapStateToProps = (state: stateTypes) => ({});

export default connect(
  mapStateToProps,
  {
  },
)(LoadingContainer);
