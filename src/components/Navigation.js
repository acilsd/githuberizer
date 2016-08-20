import app from 'ampersand-app';
import React, { Component } from 'react';
import localLinks from 'local-links';


export default class Navigation extends Component {
  handleClick(e) {
    const pathname = localLinks.getLocalPathname(e);
    if(pathname) {
      e.preventDefault();
      app.router.history.navigate(pathname);
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} { ...this.props }>
        {this.props.children}
      </div>
    );
  }
}
