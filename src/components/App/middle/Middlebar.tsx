import * as React from 'react';
import { InputGroup, Button, Popover, Position, ContextMenu, Menu, MenuItem } from '@blueprintjs/core';
import * as _ from 'lodash';
import * as classNames from 'classnames';
import SortMenu from './SortMenu';
import { sortObj, sortOrderObj, sortNameObj, noteObj } from '../../../models/models';
import { sortOrders, sortNames, noteList } from '../../../constants/AppConstants';

type propTypes = {
  height: number;
  middleWidth: number;
  sort: sortObj;
  checkNotes: string[];
  changeSort: (sort: sortObj) => void;
  changeCheckNotes: (checkNotes: string[]) => void;
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

  // 单选和多选
  check = (code :string) => {
    const { checkNotes, changeCheckNotes } = _.cloneDeep(this.props);
    const event: any = window.event;
    if (event.ctrlKey) {
      if (checkNotes.indexOf(code) >  -1) {
        const newCheckNotes =  checkNotes.filter((note: string) => {
          return note !== code;
        });
        changeCheckNotes(newCheckNotes);
      } else {
        checkNotes.push(code);
        changeCheckNotes(checkNotes);
      }
    } else {
      changeCheckNotes([code]);
    }
  };

  showContextMenu = (e: any, note: noteObj) => {
    const menu =
      <Menu>
        <MenuItem text="关注" />
        <MenuItem text="删除" />
        <MenuItem text="永久删除"/>
      </Menu>;
    if(e.button === 2) {
      ContextMenu.show(
        menu, { left: e.clientX, top: e.clientY },
      );
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    const { middleWidth, height, sort, changeSort, checkNotes } = this.props;
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
          {noteList.map((note: noteObj) => {
            return <div
              className={classNames("note-item", { active: checkNotes.indexOf(note.code) > -1 })}
              onClick={() => this.check(note.code)}
              onContextMenu={(e) => this.showContextMenu(e, note)}
            >
              {note.text}
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default Middlebar;
