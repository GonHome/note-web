import * as React from 'react';
import { 
  Button, Popover, Position,
} from '@blueprintjs/core';
import { toolbarObj } from '../../models/models';

type propTypes = {
  toolbar: toolbarObj;
  theme: string;
};
class Toolbar extends React.Component<propTypes> {

  public initMenu?: () => any;

  render() {
    const { toolbar } = this.props;
    return (
      <Popover
        content={this.initMenu ? this.initMenu() : null}
        position={Position.BOTTOM_LEFT}
        modifiers={{ arrow: { enabled: false } }}>
        <Button text={toolbar.text} small minimal />
      </Popover>
    );
  }
}

export default Toolbar;
