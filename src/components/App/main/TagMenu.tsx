import * as React from 'react';
import {
  Menu, MenuItem, MenuDivider, InputGroup, Button, Icon, Intent, Position, Toaster,
} from '@blueprintjs/core';
import * as classNames from 'classnames';
const TOASTER = Toaster.create({ position: Position.TOP });

type propTypes = {
  tags: any;
  addTag: (tagName :string) => void;
  delTag: (tagName :string) => void;
};

type stateTypes = {
  value: string;
};
class TagMenu extends React.Component<propTypes, stateTypes> {
  private ref;

  constructor(props: propTypes) {
    super(props);
    this.state = {
      value: '',
    }
  }

  addTag = () => {
    const { addTag, tags } = this.props;
    const { value } = this.state;
    if (value) {
      const isExist = tags.some(item => item.name === value);
      if (isExist) {
        TOASTER.show({
          icon: 'warning-sign',
          intent: Intent.DANGER,
          message: '此标签已存在',
        });
      } else {
        addTag(value);
      }
      this.setState({ value: '' });
    } else {
      TOASTER.show({
        icon: 'warning-sign',
        intent: Intent.DANGER,
        message: '空标签不可添加',
      });
    }
  };

  delTag = (tagName: string) => {
    const { delTag } = this.props;
    delTag(tagName);
  };

  valueChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
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
    const { tags } = this.props;
    const { value } = this.state;
    return (
      <Menu className="bar-menu" ref={e => this.ref = e}  >
        {tags.map((item: any) => {
          return <MenuItem
            key={item.id}
            shouldDismissPopover={false}
            text={<span>{item.name}
            <Icon icon="small-cross" className="hover-show" onClick={() => this.delTag(item.name)}/>
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
