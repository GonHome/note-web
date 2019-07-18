import * as React from 'react';
type propTypes = {
  height: number;
  middleWidth: number;
};
class Middlebar extends React.Component<propTypes> {

  render() {
    const { middleWidth } = this.props;
    return (
      <div className="middlebar layout column" style={{ width: middleWidth }}>
        <div className="layout-header toolbar">
          <div className="multiple grow">
          </div>
        </div>
      </div>
    );
  }
}

export default Middlebar;
