import React, { Component } from 'react';
import Navigation from '../components/Navigation';

export default class Public extends Component {
  render() {
    return (
      <Navigation class="container">
        <header role="banner">
          <h1>Labelerizer</h1>
        </header>
        <div>
          <p>Some text some text some text some text &trade;</p>
          <a href="/login" class="button button large">
            <span class="mega-octicon octicon-mark-github">Login with github</span>
          </a>
        </div>
      </Navigation>
    );
  }
}
