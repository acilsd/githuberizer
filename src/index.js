import 'babel-polyfill';
import app from 'ampersand-app';
import User from './models/user';
import Router from './routes';
import icons from 'octicons/octicons/octicons.css';
import styles from './style/custom.styl';

window.app = app;

app.extend({
  init() {
    this.user = new User();
    this.user.loadData();
    this.router = new Router;
    this.router.history.start();
  }
});

app.init();
