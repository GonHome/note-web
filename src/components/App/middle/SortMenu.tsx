import * as React from 'react';
import {
  Menu, MenuItem, Icon,
} from '@blueprintjs/core';
import * as _ from 'lodash';
import { sortObj, sortNameObj } from '../../../models/models';
import { sortNames } from '../../../constants/AppConstants';

type propTypes = {
  width: number;
  sort: sortObj;
  changeSort: (sort: sortObj) => void;
};
class SortMenu extends React.Component<propTypes> {

  changeSortOrder = (item: sortNameObj) => {
    const { sort, changeSort } = _.cloneDeep(this.props);
    sort.sortName = item.code;
    changeSort(sort);
  };

  render() {
    const { width, sort } = this.props;
    const { sortName } = sort;
    return (
      <Menu className="bar-menu" style={{ width }}>
        {sortNames.map((item: sortNameObj) => {
          return <MenuItem
            onClick={() => this.changeSortOrder(item)}
            key={item.code}
            text={<span>{item.text}
            <Icon icon={item.code === sortName ? 'tick' : 'blank'}/>
            </span>}
          />;
        })}
      </Menu>
    );
  }
}

export default SortMenu;
