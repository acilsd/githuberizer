import Model from 'ampersand-model';
import Mixins from '../utils/mixins';
import LabelCollection from './label-collection';

export default Model.extend(Mixins, {
  url() {
    return 'https://api.github.com/repos/' + this.full_name;
  },
  fetch() {
    Model.prototype.fetch.apply(this, arguments);
    this.labels.fetch();
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string'
  },
  derived: {
    appUrl: {
      deps: ['full_name'],
      fn() {
        return '/repo/' + this.full_name;
      }
    }
  },
  collections: {
    labels: LabelCollection
  }
});
