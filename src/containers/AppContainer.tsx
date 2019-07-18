import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import App from '../components/App/App';
import { getAppHeight } from '../selectors/CommonSelectors';
import { getLeftWidth, getMiddleWidth } from '../selectors/AppSelectors';
import { moveWidth } from '../actions/AppActions';
type propTypes = {
  height: number;
  leftWidth: number;
  middleWidth: number;
  moveWidth: (leftWidth: number, middleWidth: number) => void;
};

const ToolbarContainer = (props: propTypes) => <App {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  height: getAppHeight(state),
  leftWidth: getLeftWidth(state),
  middleWidth: getMiddleWidth(state),
});

export default connect(
  mapStateToProps,
  {
    moveWidth,
  },
)(ToolbarContainer);
