import * as React from 'react';
import classNames from 'classnames';
import { sideBarObj } from '../../../models/models';
type propTypes = {
  sideBar: sideBarObj;
  index: number;
  checkMenu: string;
  changeCheckMenu: (checkMenu: string) => void;
};
type stateTypes = {
  isOpen: boolean;
}
class Sidetag extends React.Component<propTypes, stateTypes> {

  render() {
    const { sideBar, checkMenu, changeCheckMenu } = this.props;
    const { icon } = sideBar;
    return (
      <div
        className={classNames("tag list-item button", icon ? 'level-0' : 'level-1', { active: sideBar.code === checkMenu })}
        onClick={() => changeCheckMenu(sideBar.code)}
      >
        <i className="icon xsmall" style={{ backgroundImage: `url(/font_icons/${sideBar.icon}.svg)` }} />
        <span className="title small" >{sideBar.text}</span>
        <span className="counter xxsmall">{sideBar.count}</span>
      </div>
    );
  }
}

export default Sidetag;
