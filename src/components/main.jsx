import React from 'react';
import Menu from './menu';
import MenuItem from './menu-item';
import MenuActions from '../actions/menu-actions';

class Main extends React.Component {
  showSideMenu(event) {
    event.preventDefault();
    MenuActions.openMenu();
  }

  render() {
    return <div>
      <button
        type="submit"
        className="button"
        onClick={this.showSideMenu.bind(this)}
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>

      <Menu>
        <MenuItem id="menu-item-1">Menu One</MenuItem>
        <MenuItem id="menu-item-2">Menu Two</MenuItem>
        <MenuItem id="menu-item-3">Menu Three</MenuItem>
        <MenuItem id="menu-item-4">Menu Four</MenuItem>
      </Menu>
    </div>
  }
}

export default Main;
