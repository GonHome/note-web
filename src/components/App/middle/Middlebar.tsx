import * as React from 'react';
import { InputGroup, Button, Popover, Position } from '@blueprintjs/core';
import SortMenu from './SortMenu';
import { sortObj } from '../../../models/models';
type propTypes = {
  height: number;
  middleWidth: number;
  sort: sortObj;
  changeSort: (sort: sortObj) => void;
};
class Middlebar extends React.Component<propTypes> {

  lockButton = (
    <Button
      icon="search"
      minimal
    />
  );

  render() {
    const { middleWidth, height, sort } = this.props;
    const { sortName, sortOrder } = sort;
    return (
      <div className="middlebar layout column" style={{ width: middleWidth, display: 'block' }}>
        <div className="layout-header toolbar">
          <div className="multiple grow">
            <div className="search" style={{ width: middleWidth - 52 }}>
              <InputGroup
                id="search"
                placeholder="Search..."
                rightElement={this.lockButton}
                small
                type="text"
              />
            </div>
            <Button icon="plus" small title="添加"/>
          </div>
        </div>
        <div className="layout-header list-header">
          <Popover
            content={<SortMenu width={middleWidth - 52}/>}
            position={Position.BOTTOM_LEFT}
            modifiers={{ arrow: { enabled: false } }}>
            <div style={{ width: middleWidth - 52, display: 'inline-block', cursor: 'pointer' }}>
              标题
            </div>
          </Popover>
          <Button icon="chevron-down" small minimal title="降序" className="bp3-button-order"/>
        </div>
        <div className="list-notes" style={{ height: height - 65 }}>
          <div className="note-item">
            测试1
          </div>
          <div className="note-item">
            测试2
          </div>
        </div>
      </div>
    );
  }
}

export default Middlebar;
