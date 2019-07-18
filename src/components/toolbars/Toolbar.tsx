import * as React from 'react';
import { 
  Button, Popover, Position,
} from '@blueprintjs/core';
import { toolbarObj } from '../../models/models';
import ToolbarMenu from './ToolbarMenu';

type propTypes = {
  toolbar: toolbarObj;
};
class Toolbar extends React.Component<propTypes> {

  render() {
    const { toolbar } = this.props;
    return (
      <Popover
        content={<ToolbarMenu toolbar={toolbar} />}
        position={Position.BOTTOM_LEFT}
        modifiers={{ arrow: { enabled: false } }}>
        <Button text={toolbar.text} small minimal />
      </Popover>
    );
  }
}

export default Toolbar;
