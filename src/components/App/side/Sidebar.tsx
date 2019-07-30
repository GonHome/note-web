import * as React from 'react';
import { sideBarList } from '../../../constants/AppConstants';
import { sideBarObj } from '../../../models/models';
import Sidetag from './Sidetag';
type propTypes = {
  height: number;
  leftWidth: number;
  checkMenu: string;
  changeCheckMenu: (checkMenu: string) => void;
  leftLoading: boolean;
};
class Sidebar extends React.Component<propTypes> {

  showSideBar = () => {
    const { changeCheckMenu, checkMenu } = this.props;
    return sideBarList.map((sideBar: sideBarObj, index: number) => (
          <Sidetag key={sideBar.code} sideBar={sideBar} index={index} checkMenu={checkMenu} changeCheckMenu={changeCheckMenu} />
      )
    )
  }

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
