import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import Toolbars from '../components/toolbars/Toolbars';
import { TOOLBAR_HEIGHT } from '../constants/CommonConstants';
type propTypes = {
  TOOLBAR_HEIGHT: number
};

const ToolbarContainer = (props: propTypes) => <Toolbars {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  TOOLBAR_HEIGHT,
});

export default connect(
  mapStateToProps,
  {
  },
)(ToolbarContainer);