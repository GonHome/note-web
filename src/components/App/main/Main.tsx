import * as React from 'react';
import Content from './Content';
import MainHeadBar from './MainHeadBar';
type propTypes = {
  height: number,
  width: number;
  leftWidth: number,
  middleWidth: number,
};
class Main extends React.Component<propTypes> {

  render() {
    const { height, leftWidth, middleWidth, width } = this.props;
    return (
      <div className="mainbar layout column" style={{ height, width: width - leftWidth - middleWidth }}>
        <MainHeadBar />
        <Content height={height}/>
      </div>
    );
  }
}

export default Main;
