import * as React from 'react';
import { 
  Button, Popover, Position,
} from '@blueprintjs/core';

type propTypes = {
  theme?: string;
  changeTheme?: (theme: string) => void;
  changeDialogType?: (dialogType: string) => void;
  moveWidth?: (leftWidth: number, middleWidth: number) => void;
  middleWidth?: number;
  leftWidth?: number;
};
class Toolbar extends React.Component<propTypes> {

  public initMenu?: () => any;

  public menuText: string = '';

  render() {
    return (
      <Popover
        content={this.initMenu ? this.initMenu() : null}
        position={Position.BOTTOM_LEFT}
        modifiers={{ arrow: { enabled: false } }}>
        <Button text={this.menuText} small minimal />
      </Popover>
    );
  }
}

export default Toolbar;
