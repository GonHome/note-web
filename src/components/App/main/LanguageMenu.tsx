import * as React from 'react';
import {
  Menu, MenuItem, Icon,
} from '@blueprintjs/core';
import { languages } from '../../../constants/AppConstants';

type propTypes = {
  language: string;
  changeLanguage: (language: string) => void;
};

type stateTypes = {
};
class LanguageMenu extends React.Component<propTypes, stateTypes> {

  constructor(props: propTypes) {
    super(props);
    this.state = {}
  }

  render() {
    const { language, changeLanguage } = this.props;
    return (
      <Menu className="bar-menu">
        {languages.map((item: string) => {
          return <MenuItem
            onClick={() => changeLanguage(item)}
            text={
              <span>
                <span>{item}</span>
                <Icon icon={language === item ? 'tick' : 'blank'} />
              </span>
            }
            key={item}
          />
        })}
      </Menu>
    );
  }
}

export default LanguageMenu;
