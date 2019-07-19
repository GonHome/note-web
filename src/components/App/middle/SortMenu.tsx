import * as React from 'react';
import { Icon } from '@blueprintjs/core';
import {
  Menu, MenuItem,
} from '@blueprintjs/core';

type propTypes = {
  width: number;
};
class SortMenu extends React.Component<propTypes> {

  render() {
    const { width } = this.props;
    return (
      <Menu className="bar-menu" style={{ width }}>
        <MenuItem text={<span>标题<Icon icon="tick"/></span>} />
        <MenuItem text={<span>创建时间</span>} />
        <MenuItem text={<span>修改时间</span>} />
      </Menu>
    );
  }
}

export default SortMenu;
