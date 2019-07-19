import * as React from 'react';
import { 
  Menu, MenuItem,
} from '@blueprintjs/core';
import { toolbarObj, toolbarsObj } from '../../models/models';

type propTypes = {
  toolbar: toolbarObj;
  theme: string;
};
class ToolbarMenu extends React.Component<propTypes> {

  showMenus = (toolbars: toolbarsObj) => toolbars.map((item: any, index: number) => {
    const { theme } = this.props;
    const { menus } = item;
    if (menus) {
      return (
        <MenuItem text={item.text} key={`${item.text}-${index}`} popoverProps={{ openOnTargetFocus :false }}>
          {this.showMenus(menus)}
        </MenuItem>
      );
    }
    if (item.text === 'Light' || item.text === 'Dark') {
      return (
        <MenuItem
          icon={theme === item.text ? 'tick' : 'blank'}
          text={item.text}
          key={`${item.text}-${index}`}
        />
      );
    }
    return (
      <MenuItem
        text={item.text}
        key={`${item.text}-${index}`}
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
