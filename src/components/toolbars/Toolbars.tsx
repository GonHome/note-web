import * as React from 'react';
import { ButtonGroup } from '@blueprintjs/core';
import { toolbars } from '../../constants/ToolbarConstants';
import { toolbarObj } from '../../models/models';
import Toolbar from './Toolbar';

type propTypes = {
  TOOLBAR_HEIGHT: number;
};
class Toolbars extends React.Component<propTypes> {
  showToolbars = () => toolbars.map((toolbar: toolbarObj, index: number) => {
    return <Toolbar key={index} toolbar={toolbar} />
  });

  render() {
    const { TOOLBAR_HEIGHT } = this.props;
    return (
      <div className="toolbar" style={{ height: TOOLBAR_HEIGHT }}>
        <ButtonGroup>
          {this.showToolbars()}
        </ButtonGroup>
      </div>
    );
  }
}

export default Toolbars;
