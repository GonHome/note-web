import * as React from 'react';
import classNames from 'classnames';
type propTypes = {
  code: string;
  text: string;
  icon?: string;
  checkMenu: string;
  count: number;
  changeCheckMenu: (checkMenu: string) => void;
};
type stateTypes = {
  isOpen: boolean;
}
class Sidetag extends React.Component<propTypes, stateTypes> {

  render() {
    const { code, text, icon, count, checkMenu, changeCheckMenu } = this.props;
    return (
      <div
        className={classNames("tag list-item button", icon ? 'level-0' : 'level-1', { active: code === checkMenu })}
        onClick={() => changeCheckMenu(code)}
      >
        <i className="icon xsmall" style={{ backgroundImage: `url(/font_icons/${icon}.svg)` }} />
        <span className="title small" >{text}</span>
        <span className="counter xxsmall">{count}</span>
      </div>
    );
  }
}

export default Sidetag;
