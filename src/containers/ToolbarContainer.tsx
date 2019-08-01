import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { stateTypes } from '../reducers';
import Toolbars from '../components/toolbars/Toolbars';
import { TOOLBAR_HEIGHT } from '../constants/CommonConstants';
import { getTheme } from '../selectors/CommonSelectors';
import { changeTheme } from '../actions/EnvironmentActions';
import { changeDialogType, moveWidth, changeIsEyeWidth, clearNotes, choseAll, deleteNotes } from '../actions/AppActions';
import { getLeftWidth, getMiddleWidth, getIsEye } from '../selectors/AppSelectors';
import { eyeWidthObj } from '../models/models';
type propTypes = {
  TOOLBAR_HEIGHT: number;
  theme: string;
  changeTheme: (theme: string) => void;
  changeDialogType: (dialogType: string) => void;
  moveWidth: (leftWidth: number, middleWidth: number) => void;
  middleWidth: number;
  leftWidth: number;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
  isEye: boolean;
  clearNotes: () => void;
  choseAll: () => void;
  deleteNotes: (isDelete: boolean, ids?: string) => void;
};

const ToolbarContainer = (props: propTypes) => <Toolbars {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  TOOLBAR_HEIGHT,
  theme: getTheme(state),
  middleWidth: getMiddleWidth(state),
  leftWidth: getLeftWidth(state),
  isEye: getIsEye(state),
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      changeTheme,
      changeDialogType,
      moveWidth,
      changeIsEyeWidth,
      clearNotes,
      choseAll,
      deleteNotes,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolbarContainer);
