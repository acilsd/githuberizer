/*eslint no-console: "off"*/
import app from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import { render } from 'react-dom';
import qs from 'qs';
import xhr from 'xhr';
import Layout from './layout';
import PublicPage from './pages/Public';
import ReposPage from './pages/Repos';
import RepoDetail from './pages/RepoDetail';
import ErrorPage from './pages/ErrorPage';

import config from './config';

const root = document.getElementById('mount-point');

//router securing
function requireAuth(route) {
  return function() {
    if(app.user.token) {
      this[route].apply(this, arguments);
    } else {
      this.redirectTo('/');
    }
  };
}

export default Router.extend({
  renderPage(page, opts ={ layout: true }) {
    if(opts.layout) {
      page = (
        <Layout user={app.user}>
          {page}
        </Layout>
      );
    }
    render(page, root);
  },

  routes: {
    '': 'public',
    'repos': requireAuth('repos'),
    'repo/:owner/:name': requireAuth('RepoDetail'),
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query': 'authCallback',
    '*fourOhfour': 'fourOhfour'
  },
  public() {
    this.renderPage(<PublicPage />, { layout: false });
  },
  repos() {
    this.renderPage(<ReposPage repos={ app.user.repos } />);
  },
  RepoDetail(owner, name) {
    const model = app.user.repos.getByRepoName(owner+ '/' + name);
    this.renderPage(<RepoDetail repo={ model } labels={ model.labels } />);
  },
  login() {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: config.clientID,
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user,repo'
    });
  },
  logout() {
    window.localStorage.removeItem('token');
    window.location = '/';
  },
  authCallback(query) {
    query = qs.parse(query);
    xhr({
      url: config.authUrl + query.code,
      json: true
    }, (err, req, body) => {
      console.log(body.token);
      app.user.token = body.token;
      this.redirectTo('/repos');
    });
    this.renderPage(<ErrorPage status='load' title='Connecting to GitHub...'/>);
  },
  fourOhfour() {
    this.renderPage(<ErrorPage title='Wrong page!' body='This page does not exist'/>);
  }
});
