import * as React from 'react';
import {
  Menu, MenuItem, MenuDivider, InputGroup, Button, Icon, Intent, Position, Toaster,
} from '@blueprintjs/core';
import * as _ from 'lodash';
import * as classNames from 'classnames';
import { sortNameObj } from '../../../models/models';
import { sortNames } from '../../../constants/AppConstants';
const TOASTER = Toaster.create({ position: Position.TOP });

type propTypes = {
};

type stateTypes = {
  menus: sortNameObj[];
  value: string;
};
class TagMenu extends React.Component<propTypes, stateTypes> {
  private ref;

  constructor(props: propTypes) {
    super(props);
    this.state = {
      menus: _.cloneDeep(sortNames),
      value: '',
    }
  }

  addTag = () => {
    const { menus, value } = this.state;
    if (value) {
      menus.push({ code: value, text: value });
      this.setState({ menus, value: '' });
    } else {
      TOASTER.show({
        icon: 'warning-sign',
        intent: Intent.DANGER,
        message: '空标签不可添加',
      });
    }
  };

  valueChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

  cancelTag = (code: string) => {
    const { menus } = this.state;
    const newMenus = menus.filter((item: sortNameObj) => {
      return item.code !== code;
    });
    this.setState({ menus: newMenus });
  };

  searchButton = () => {
    const { value } = this.state;
    return (
      <Button
        icon={<Icon icon="plus" className={classNames({ 'danger': !value, })} />}
        minimal
        onClick={ this.addTag }
        title="添加"
      />
    );
  };

  render() {
    const { menus, value } = this.state;
    return (
      <Menu className="bar-menu" ref={e => this.ref = e}  >
        {menus.map((item: sortNameObj) => {
          return <MenuItem
            key={item.code}
            shouldDismissPopover={false}
            text={<span>{item.text}
            <Icon icon="small-cross" className="hover-show" onClick={() => this.cancelTag(item.code)}/>
            </span>}
          />;
        })}
        <MenuDivider />
        <MenuItem
          text={
            <InputGroup
              small
              placeholder="添加标签"
              rightElement={this.searchButton()}
              value={value}
              onChange={this.valueChange}
            />
          }
          shouldDismissPopover={false}
        />
      </Menu>
    );
  }
}

export default TagMenu;
