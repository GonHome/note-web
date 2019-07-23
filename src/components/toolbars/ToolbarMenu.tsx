import * as React from 'react';
import { 
  Menu, MenuItem,
} from '@blueprintjs/core';
import { toolbarObj, toolbarsObj } from '../../models/models';

type propTypes = {
  toolbar: toolbarObj;
};
class ToolbarMenu extends React.Component<propTypes> {

  showMenus = (toolbars: toolbarsObj) => toolbars.filter((item: any) => {
    return item.visiable;
  }).map((item: any, index: number) => {
    const { menus } = item;
    if (menus) {
      return (
        <MenuItem
          text={item.text}
          key={`${item.text}-${index}`}
          popoverProps={{ openOnTargetFocus :false }}
          onClick={item.event ? item.event : null}
        >
          {this.showMenus(menus)}
        </MenuItem>
      );
    }
    if (item.icon) {
      return (
        <MenuItem
          icon={item.icon}
          text={item.text}
          onClick={item.event ? item.event : null}
          key={`${item.text}-${index}`}
        />
      );
    }
    return (
      <MenuItem
        text={item.text}
        key={`${item.text}-${index}`}
        onClick={item.event ? item.event : null}
    />
    );
  });

  render() {
    const { toolbar } = this.props;
    const { menus } = toolbar;
    if (menus) {
      return (
        <Menu className="bar-menu">
          {this.showMenus(menus)}
        </Menu>
      );
    }
    return null;
  }
}

export default ToolbarMenu;
