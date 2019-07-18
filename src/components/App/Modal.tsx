import * as React from 'react';
import classNames from 'classnames';
import { Button } from '@blueprintjs/core';
type propTypes = {
  height: number;
  isOpen: boolean;
  Dom?: React.ReactElement;
};
type stateTypes = {
  isOpen: boolean;
}
class Modal extends React.Component<propTypes, stateTypes> {

  constructor(props: propTypes) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  componentWillReceiveProps(nextProps: Readonly<propTypes>): void {
    const { isOpen } = nextProps;
    if (this.state.isOpen !== isOpen) {
      this.setState({ isOpen });
    }
  }

  test = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className={classNames('modal card bordered quick-panel', { 'open': isOpen, 'show': isOpen })} >
        <input placeholder="打开笔记或者附件..." className="autofocus card-header bordered small" value="" />
        <Button onClick={this.test} text={'关闭'}/>
      </div>
    );
  }
}

export default Modal;
