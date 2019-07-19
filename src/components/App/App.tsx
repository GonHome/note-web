import * as React from 'react';
import Modal from './Modal';
import Sidebar from './side/Sidebar';
import Middlebar from './middle/Middlebar';
import Main from './main/Main';
import {
  LEFT_MAX_WIDTH, LEFT_MIN_WIDTH, MIDDLE_MAX_WIDTH, MIDDLE_MIN_WIDTH,
} from '../../constants/CommonConstants';
type propTypes = {
  height: number;
  width: number;
  leftWidth: number;
  middleWidth: number;
  moveWidth: (leftWidth: number, middleWidth: number) => void;
};
type stateTypes = {
  isOpen: boolean;
}
class App extends React.Component<propTypes, stateTypes> {

  constructor(props: propTypes) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  test = () => {
    this.setState({ isOpen: true });
  };

  mouseDownMoveMiddle = (e: any) => {
    let bx = e.clientX;
    let prevX = 0;
    document.onmousemove = (event) => {
      const { leftWidth, middleWidth, moveWidth } = this.props;
      let nextX = event.clientX - bx;
      let newMiddleWidth = middleWidth + nextX - prevX;
      let leftDiff = 0;
      if (newMiddleWidth < MIDDLE_MIN_WIDTH) {
        leftDiff = newMiddleWidth - MIDDLE_MIN_WIDTH;
        newMiddleWidth = MIDDLE_MIN_WIDTH;
      } else if (newMiddleWidth > MIDDLE_MAX_WIDTH) {
        leftDiff =  newMiddleWidth - MIDDLE_MAX_WIDTH;
        newMiddleWidth = MIDDLE_MAX_WIDTH;
      }
      let newLeftWidth = leftWidth + leftDiff;
      if (newLeftWidth < LEFT_MIN_WIDTH) {
        newLeftWidth = LEFT_MIN_WIDTH;
      } else if (newLeftWidth > LEFT_MAX_WIDTH) {
        newLeftWidth = LEFT_MAX_WIDTH;
      }
      if (leftWidth !== newLeftWidth || middleWidth !== newMiddleWidth) {
        moveWidth(newLeftWidth, newMiddleWidth);
      }
      prevX = nextX;
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
    e.stopPropagation();
  };

  mouseDownMoveSide = (e: any) => {
    const sumWidth = this.props.middleWidth + this.props.leftWidth;
    let bx = e.clientX;
    let prevX = 0;
    document.onmousemove = (event) => {
      const { leftWidth, middleWidth, moveWidth } = this.props;
      let nextX = event.clientX - bx;
      let newLeftWidth = leftWidth + nextX - prevX;
      if (newLeftWidth < LEFT_MIN_WIDTH) {
        newLeftWidth = LEFT_MIN_WIDTH;
      } else if (newLeftWidth > LEFT_MAX_WIDTH || newLeftWidth > sumWidth - MIDDLE_MIN_WIDTH ) {
        newLeftWidth = LEFT_MAX_WIDTH > sumWidth - MIDDLE_MIN_WIDTH ? sumWidth - MIDDLE_MIN_WIDTH : LEFT_MAX_WIDTH;
      }
      let newMiddleWidth = sumWidth - newLeftWidth;
      if (newMiddleWidth < MIDDLE_MIN_WIDTH) {
        newMiddleWidth = MIDDLE_MIN_WIDTH;
      } else if (newMiddleWidth > MIDDLE_MAX_WIDTH) {
        newMiddleWidth = MIDDLE_MAX_WIDTH;
      }
      if (leftWidth !== newLeftWidth || middleWidth !== newMiddleWidth) {
        moveWidth(newLeftWidth, newMiddleWidth);
      }
      prevX = nextX;
    };
    document.onmouseup = () => {
      document.onmousemove = null;
    };
    e.stopPropagation();
  };

  mouseUpMoveMiddle = () => {
    document.onmousemove = null;
  };

  mouseUpMoveSide = () => {
    document.onmousemove = null;
  };

  render() {
    const { height, leftWidth, middleWidth, width } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="app" style={{ height }}>
        <Modal { ...{ isOpen, height } } />
        <div className="layout horizontal resizable main app-wrapper focus layout-priority-z-index sash-dragging">
          <div
            className="sash"
            style={{ transform: `matrix(1, 0, 0, 1, ${leftWidth + middleWidth}, 0)` }}
            onMouseDown={this.mouseDownMoveMiddle}
            onMouseUp={this.mouseUpMoveMiddle}
          />
          <div
            className="sash"
            style={{ transform: `matrix(1, 0, 0, 1, ${leftWidth}, 0)` }}
            onMouseDown={this.mouseDownMoveSide}
            onMouseUp={this.mouseUpMoveSide}
          />
          <Sidebar { ...{ height, leftWidth }} />
          <Middlebar { ...{ height, middleWidth }} />
          <Main { ...{ height, leftWidth, middleWidth, width }}/>
        </div>
      </div>
    );
  }
}

export default App;
