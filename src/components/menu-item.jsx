import React from 'react';

class MenuItem extends React.Component {
  menuItemSelected(id) {
    event.preventDefault();
    console.log('Menu selected with id: ' + id);
  }

  render() {
    return <div
      className="menu-item"
      onClick={this.menuItemSelected.bind(this, this.props.id)}
    >
      {this.props.children}
    </div>
  }
}

export default MenuItem;
