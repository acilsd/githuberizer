import Collection from 'ampersand-rest-collection';
import Label from './label';
import Mixins from '../utils/mixins';

export default Collection.extend(Mixins, {
  url() {
    return this.parent.url() + '/labels';
  },
  model: Label
});
