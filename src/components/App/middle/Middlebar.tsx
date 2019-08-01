import * as React from 'react';
import { InputGroup, Button, Popover, Position, ContextMenu, Menu, MenuItem, Spinner, Icon } from '@blueprintjs/core';
import * as _ from 'lodash';
import * as classNames from 'classnames';
import SortMenu from './SortMenu';
import { sortObj, sortOrderObj, sortNameObj, noteObj } from '../../../models/models';
import { sortOrders, sortNames } from '../../../constants/AppConstants';

type propTypes = {
  height: number;
  middleWidth: number;
  sort: sortObj;
  checkNotes: string[];
  notes: any[];
  changeSort: (sort: sortObj) => void;
  changeCheckNotes: (checkNotes: string[]) => void;
  search: string;
  changeSearch: (search: string) => void;
  searchNotes: () => void;
  addNotes: () => void;
  middleLoading: boolean;
  favoriteNotes: (isFavourite: boolean, ids?: string) => void;
  pinNotes: (isPin: boolean, ids?: string) => void;
  deleteNotes: (isDelete: boolean, ids?: string) => void;
  deleteForeverNotes: (ids?: string) => void;
};

class Middlebar extends React.Component<propTypes> {

  searchButton = () => {
    const { searchNotes } = this.props;
    return <Button
      icon="search"
      minimal
      onClick={searchNotes}
    />
  };

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

  showContextMenu = (e: any, note: any) => {
    const { favoriteNotes, pinNotes, deleteForeverNotes, deleteNotes } = this.props;
    const menu =
      <Menu>
        <MenuItem text={note.isPin ? '取消置顶' : '置顶'} onClick={() => pinNotes(!note.isPin, `${note.id}`)} />
        <MenuItem text={note.isFavourite ? '取消关注' : '关注'} onClick={() => favoriteNotes(!note.isFavourite, `${note.id}`)} />
        <MenuItem text={note.isDelete ? '还原' : '删除'} onClick={() => deleteNotes(!note.isDelete, `${note.id}`)}/>
        <MenuItem text="永久删除" onClick={() => deleteForeverNotes(`${note.id}`)}/>
      </Menu>;
    if(e.button === 2) {
      ContextMenu.show(
        menu, { left: e.clientX, top: e.clientY },
      );
      e.preventDefault();
      e.stopPropagation();
    }
  };

  focusSearch = () => {
    document.body.addEventListener('keyup', this.keyUpEvent);
  };

  blurSearch = () => {
    document.body.removeEventListener('keyup', this.keyUpEvent);
  };

  changeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const { changeSearch } = this.props;
    changeSearch(e.currentTarget.value)
  };

  keyUpEvent = (e: any) => {
    const { searchNotes } = this.props;
    if (window.event) {
      e = window.event;
    }
    const code = e.keyCode;
    if (code === 13) {
      searchNotes();
    }
  };

  render() {
    const { middleWidth, height, sort, changeSort, checkNotes, notes, addNotes, middleLoading } = this.props;
    return (
      <div className="middlebar layout column" style={{ width: middleWidth, display: 'block' }}>
        <div className="layout-header toolbar">
          <div className="multiple grow">
            <div className="search" style={{ width: middleWidth - 52 }}>
              <InputGroup
                id="search"
                placeholder="Search..."
                rightElement={this.searchButton()}
                small
                type="text"
                onBlur={this.blurSearch}
                onChange={this.changeSearch}
                onFocus={this.focusSearch}
              />
            </div>
            <Button icon="plus" small title="添加" onClick={addNotes}/>
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
          {middleLoading ? <Spinner className="spiner"/> : null}
          {notes.map((note: any) => {
            return <div
              key={note.id}
              className={classNames("note-item", { active: checkNotes.indexOf(note.id) > -1 })}
              onClick={() => this.check(note.id)}
              onContextMenu={(e) => this.showContextMenu(e, note)}
            >
              <span title={note.name} className="note-name">{note.name}</span>
              <span className="icon-item">
                {note.isFavourite ? <Icon icon="star" title="已关注" iconSize={14}/> : null}
                {note.isPin ? <Icon icon="pin" title="已置顶" iconSize={14}/> : null}
              </span>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default Middlebar;
