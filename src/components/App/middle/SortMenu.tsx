import * as React from 'react';
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
        <MenuItem text="标题" />
        <MenuItem text="创建时间" />
        <MenuItem text="修改时间" />
      </Menu>
    );
  }
}

export default SortMenu;
