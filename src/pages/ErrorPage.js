import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar';

export default class ErrorPage extends Component {
  render() {
    const { status, body, title } = this.props;
    let content = null;
    if(status) {
      content = (
        <div class="container">
          <h2>{ title }</h2>
          <h3>{ body }</h3>
          <ProgressBar />
        </div>
      );
    } else {
      content = (
        <div class="container">
          <h2>{ title }</h2>
          <h3>{ body }</h3>
          <a class="button button--back" href="/">Back</a>
        </div>
      );
    }
    return (
      <div>
        { content }
      </div>
    );
  }
}
