import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import Toolbars from '../components/toolbars/Toolbars';
import { TOOLBAR_HEIGHT } from '../constants/CommonConstants';
import { getTheme } from '../selectors/CommonSelectors';
import { changeTheme } from '../actions/EnvironmentActions';
import { changeDialogType, moveWidth, changeIsEye } from '../actions/AppActions';
import { getLeftWidth, getMiddleWidth, getIsEye } from '../selectors/AppSelectors';
type propTypes = {
  TOOLBAR_HEIGHT: number;
  theme: string;
  changeTheme: (theme: string) => void;
  changeDialogType: (dialogType: string) => void;
  moveWidth: (leftWidth: number, middleWidth: number) => void;
  middleWidth: number;
  leftWidth: number;
  changeIsEye: (isEye: boolean) => void;
  isEye: boolean;
};

const ToolbarContainer = (props: propTypes) => <Toolbars {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  TOOLBAR_HEIGHT,
  theme: getTheme(state),
  middleWidth: getMiddleWidth(state),
  leftWidth: getLeftWidth(state),
  isEye: getIsEye(state),
});

export default connect(
  mapStateToProps,
  {
    changeTheme,
    changeDialogType,
    moveWidth,
    changeIsEye,
  },
)(ToolbarContainer);
