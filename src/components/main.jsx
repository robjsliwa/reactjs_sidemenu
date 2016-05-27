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
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
              <a
                type="submit"
                className="button navbar-brand"
                onClick={this.showSideMenu.bind(this)}
              >
                <i className="fa fa-bars" aria-hidden="true"></i>
              </a>
          </div>
          <div className="navbar-header">
            <a className="navbar-brand" href="#">My App</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" aria-hidden="true"></i> <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Help</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Sign Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
