import * as React from 'react';
import { sideBarList } from '../../../constants/AppConstants';
import { sideBarObj } from '../../../models/models';
import Sidetag from './Sidetag';
type propTypes = {
  height: number;
  leftWidth: number;
  checkMenu: string;
  notes: any[];
  changeCheckMenu: (checkMenu: string) => void;
  leftLoading: boolean;
};
class Sidebar extends React.Component<propTypes> {

  notebookCount = (notes: any) => notes.filter((item: any) => !item.isDelete).length;

  favoriteCount = (notes: any) => notes.filter((item: any) => item.isFavourite).length;

  tagCount = (notes: any) => notes.filter((item: any) => item.tags.length > 0).length;

  trashCount = (notes: any) => notes.filter((item: any) => item.isDelete).length;

  render() {
    const { leftWidth, height, notes, changeCheckMenu, checkMenu } = this.props;
    return (
      <div className="sidebar layout column" style={{ width: leftWidth }}>
        <div className="tree list list-tags layout-content" style={{ height }}>
          <Sidetag
            code="ALL"
            icon="note"
            text="全部笔记"
            count={notes.length}
            checkMenu={checkMenu}
            changeCheckMenu={changeCheckMenu}
          />
          <Sidetag
            code="NOTEBOOKS"
            icon="notebook"
            text="笔记本"
            count={this.notebookCount(notes)}
            checkMenu={checkMenu}
            changeCheckMenu={changeCheckMenu}
          />
          <Sidetag
            code="FAVORITE"
            icon="star"
            text="关注"
            count={this.favoriteCount(notes)}
            checkMenu={checkMenu}
            changeCheckMenu={changeCheckMenu}
          />
          <Sidetag
            code="TAGS"
            icon="tag"
            text="标签"
            count={this.tagCount(notes)}
            checkMenu={checkMenu}
            changeCheckMenu={changeCheckMenu}
          />
          <Sidetag
            code="TRASH"
            icon="delete"
            text="回收站"
            count={this.trashCount(notes)}
            checkMenu={checkMenu}
            changeCheckMenu={changeCheckMenu}
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
