import * as React from 'react';
import AboutDialog from './AboutDialog';
type propTypes = {
  dialogType: string;
  changeDialogType: (dialogType: string) => void;
};
type stateTypes = {
  isOpen: boolean;
}
class Dialog extends React.Component<propTypes, stateTypes> {

  constructor(props: propTypes) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  onClose = () => {
    const { changeDialogType } = this.props;
    changeDialogType('');
  };

  render() {
    const { dialogType } = this.props;
    return (
      <AboutDialog isOpen = {dialogType === 'about'} onClose={this.onClose}/>
    );
  }
}

export default Dialog;
