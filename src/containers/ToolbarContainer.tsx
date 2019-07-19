import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import Toolbars from '../components/toolbars/Toolbars';
import { TOOLBAR_HEIGHT } from '../constants/CommonConstants';
import { getTheme } from '../selectors/CommonSelectors';
import { changeTheme } from '../actions/EnvironmentActions';
type propTypes = {
  TOOLBAR_HEIGHT: number;
  theme: string;
  changeTheme: (theme: string) => void;
};

const ToolbarContainer = (props: propTypes) => <Toolbars {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  TOOLBAR_HEIGHT,
  theme: getTheme(state),
});

export default connect(
  mapStateToProps,
  {
    changeTheme
  },
)(ToolbarContainer);
