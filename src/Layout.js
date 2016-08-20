//using old react syntax cuz of mixins
import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import Navigation from './components/Navigation';

export default React.createClass({
  mixins: [ampersandMixin],

  render() {
    const { user } = this.props;
    return (
      <Navigation>
        <nav class="top-nav top-nav-light cf" role='navigation'>
          <input id="menu-toggle" class="menu-toggle" type="checkbox"/>
          <label htmlFor="menu-toggle">Menu</label>
          <ul class="list-unstyled list-inline cf">
            <li class="main-logo">Labelr</li>
            <li><a href="/repos">Repos</a></li>
            <li class="pull-right">
              <a class="octicon octicon-sign-out" href="/logout">Logout</a>
              <span class="user-login">{user.login}</span>
            </li>
          </ul>
        </nav>
        <div class="containter">
          {this.props.children}
        </div>
      </Navigation>
    );
  }
});
