import * as React from 'react';
import { InputGroup, Button, Popover, Position } from '@blueprintjs/core';
import * as _ from 'lodash';
import SortMenu from './SortMenu';
import { sortObj, sortOrderObj, sortNameObj } from '../../../models/models';
import { sortOrders, sortNames } from '../../../constants/AppConstants';
type propTypes = {
  height: number;
  middleWidth: number;
  sort: sortObj;
  changeSort: (sort: sortObj) => void;
};
class Middlebar extends React.Component<propTypes> {

  searchButton = (
    <Button
      icon="search"
      minimal
    />
  );

  changeSortOrder = () => {
    const { sort, changeSort } = _.cloneDeep(this.props);
    const { sortOrder, sortName } = sort;
    let newSort: sortObj = sort;
    if (sortOrder === 'ASC') {
      newSort = { sortName, sortOrder: 'DESC' };
    } else {
      newSort = { sortName, sortOrder: 'ASC' };
    }
    changeSort(newSort);
  };

  showOrderIcon = () => {
    const { sort } = this.props;
    const { sortOrder } = sort;
    const checkItem = sortOrders.filter((item: sortOrderObj) => {
      return item.code === sortOrder;
    })[0];
    if (checkItem) {
      // @ts-ignore
      return <Button icon={checkItem.icon} small minimal title={checkItem.text} className="bp3-button-order" onClick={this.changeSortOrder}/>;
    }
    return null;
  };

  showSortName = () => {
    const { sort } = this.props;
    const { sortName } = sort;
    const checkItem = sortNames.filter((item: sortNameObj) => {
      return item.code === sortName;
    })[0];
    if (checkItem) {
      return checkItem.text;
    }
    return null;
  };

  render() {
    const { middleWidth, height, sort, changeSort } = this.props;
    return (
      <div className="middlebar layout column" style={{ width: middleWidth, display: 'block' }}>
        <div className="layout-header toolbar">
          <div className="multiple grow">
            <div className="search" style={{ width: middleWidth - 52 }}>
              <InputGroup
                id="search"
                placeholder="Search..."
                rightElement={this.searchButton}
                small
                type="text"
              />
            </div>
            <Button icon="plus" small title="添加"/>
          </div>
        </div>
        <div className="layout-header list-header">
          <Popover
            content={<SortMenu width={middleWidth - 52} sort={sort} changeSort={changeSort}/>}
            position={Position.BOTTOM_LEFT}
            modifiers={{ arrow: { enabled: false } }}>
            <div style={{ width: middleWidth - 52, display: 'inline-block', cursor: 'pointer' }}>
              {this.showSortName()}
            </div>
          </Popover>
          {this.showOrderIcon()}
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
