import * as React from 'react';
import { sideBarList } from '../../../constants/CommonConstants';
import { sideBarObj } from '../../../models/models';
import Sidetag from './Sidetag';
type propTypes = {
  height: number;
  leftWidth: number;
};
class Sidebar extends React.Component<propTypes> {

  showSideBar = () => sideBarList.map((sideBar: sideBarObj, index: number) => (
    <Sidetag key={sideBar.code} sideBar={sideBar} index={index} />
    )
  );

  render() {
    const { leftWidth, height } = this.props;
    return (
      <div className="sidebar layout column" style={{ width: leftWidth }}>
        <div className="tree list list-tags layout-content" style={{ height }}>
          {this.showSideBar()}
        </div>
      </div>
    );
  }
}

export default Sidebar;
