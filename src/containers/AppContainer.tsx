import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import App from '../components/App/App';
import { getAppHeight, getTheme, getWidth } from '../selectors/CommonSelectors';
import {
  getLeftWidth,
  getMiddleWidth,
  getSort,
  getIsEdit,
  getIsEye,
  getCheckMenu,
  getCheckNotes
} from '../selectors/AppSelectors';
import { moveWidth, changeSort, changeIsEdit, changeIsEyeWidth, changeCheckMenu, changeCheckNotes } from '../actions/AppActions';
import { sortObj, eyeWidthObj } from '../models/models';
type propTypes = {
  height: number;
  leftWidth: number;
  middleWidth: number;
  width: number;
  sort: sortObj;
  checkMenu: string;
  checkNotes: string[];
  moveWidth: (leftWidth: number, middleWidth: number) => void;
  changeSort: (sort: sortObj) => void;
  theme: string;
  isEdit: boolean;
  isEye: boolean;
  changeIsEdit: (isEdit: boolean) => void;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
  changeCheckMenu: (checkMenu: string) => void;
  changeCheckNotes: (checkNotes: string[]) => void;
};

const AppContainer = (props: propTypes) => <App {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  height: getAppHeight(state),
  width: getWidth(state),
  leftWidth: getLeftWidth(state),
  middleWidth: getMiddleWidth(state),
  sort: getSort(state),
  theme: getTheme(state),
  isEdit: getIsEdit(state),
  isEye: getIsEye(state),
  checkMenu: getCheckMenu(state),
  checkNotes: getCheckNotes(state),
});

export default connect(
  mapStateToProps,
  {
    moveWidth,
    changeSort,
    changeIsEdit,
    changeIsEyeWidth,
    changeCheckMenu,
    changeCheckNotes,
  },
)(AppContainer);
