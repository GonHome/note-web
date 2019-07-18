import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import Head from '../components/Head';
import { HEAD_HEIGHT } from '../constants/CommonConstants';
type propTypes = {
  HEAD_HEIGHT: number
};

const HeadContainer = (props: propTypes) => <Head {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  HEAD_HEIGHT,
});

export default connect(
  mapStateToProps,
  {
  },
)(HeadContainer);
