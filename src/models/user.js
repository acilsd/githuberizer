import Model from 'ampersand-model';
import Mixins from '../utils/mixins';
import RepoCollection from './repo-collection';

export default Model.extend(Mixins, {
  url: 'https://api.github.com/user',

  initialize() {
    this.token = window.localStorage.token;
    this.on('change:token', this.onTokenChange);
  },
  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },
  session: {
    token: 'string'
  },
  collections: {
    repos: RepoCollection
  },
  onTokenChange() {
    window.localStorage.token = this.token;
    this.loadData();
  },
  loadData() {
    if(this.token) {
      this.fetch();
      this.repos.fetch();
    }
    return;
  }
});
