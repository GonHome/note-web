import * as React from 'react';
import {
  Menu, MenuItem, MenuDivider, InputGroup, Button,
} from '@blueprintjs/core';
import { sortNameObj } from "../../../models/models";
import { sortNames } from '../../../constants/AppConstants';

type propTypes = {
};
class TagMenu extends React.Component<propTypes> {
  private ref;

  addTag = () => {
    console.log(this.ref);
  };

  searchButton = (
    <Button
      icon="plus"
      minimal
      onClick={this.addTag}
      title="添加"
    />
  );

  render() {
    return (
      <Menu className="bar-menu" ref={e => this.ref = e}  >
        {sortNames.map((item: sortNameObj) => {
          return <MenuItem
            key={item.code}
            text={<span>{item.text}
            </span>}
          />;
        })}
        <MenuDivider />
        <MenuItem
          text={
            <InputGroup
              small
              placeholder="添加标签"
              rightElement={this.searchButton}
            />
          }
          shouldDismissPopover={false}
        />
      </Menu>
    );
  }
}

export default TagMenu;
