import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import App from '../components/App/App';
import { getAppHeight, getTheme, getWidth } from '../selectors/CommonSelectors';
import { getLeftWidth, getMiddleWidth, getSort, getIsEdit } from '../selectors/AppSelectors';
import { moveWidth, changeSort, changeIsEdit } from '../actions/AppActions';
import { sortObj } from '../models/models';
type propTypes = {
  height: number;
  leftWidth: number;
  middleWidth: number;
  width: number;
  sort: sortObj;
  moveWidth: (leftWidth: number, middleWidth: number) => void;
  changeSort: (sort: sortObj) => void;
  theme: string;
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
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
});

export default connect(
  mapStateToProps,
  {
    moveWidth,
    changeSort,
    changeIsEdit,
  },
)(AppContainer);
