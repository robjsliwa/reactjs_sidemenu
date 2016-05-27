import React from 'react';
import MenuItem from './menu-item';
import MenuStore from '../stores/menu-store';
import MenuActions from '../actions/menu-actions';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    this.changeListener = this.onMenuUpdate.bind(this);
    MenuStore.addChangeListener(this.changeListener);
  }

  componentWillUnmount() {
    MenuStore.removeChangeListener(this.changeListener);
  }

  onMenuUpdate() {
    this.setState({
      visible: MenuStore.isVisible
    });
    if (MenuStore.isVisible) {
      this.showMenuHandler();
    }
  }

  showMenuHandler() {
    this.hideListener = this.hideMenuHandler.bind(this);
    document.addEventListener("click", this.hideListener);
  }

  hideMenuHandler() {
    document.removeEventListener("click", this.hideListener);
    MenuActions.closeMenu();
  }

  render() {
    return <div className="menu">
      <div className={(this.state.visible ? "visible left" : "left")}>
        {this.state.visible ? this.props.children : null}
      </div>
    </div>
  }
}

export default Menu;
