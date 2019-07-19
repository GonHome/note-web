import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import { getDialogType } from '../selectors/AppSelectors';
import { changeDialogType } from '../actions/AppActions';
import Dialog from '../components/dialog/Dialog';
type propTypes = {
  dialogType: string;
  changeDialogType: (dialogType: string) => void;
};

const DialogContainer = (props: propTypes) => <Dialog {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  dialogType: getDialogType(state),
});

export default connect(
  mapStateToProps,
  {
    changeDialogType,
  },
)(DialogContainer);
