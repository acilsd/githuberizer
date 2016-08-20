import Collection from 'ampersand-rest-collection';
import Repo from './repo';
import Mixins from '../utils/mixins';

export default Collection.extend(Mixins, {
  url: 'https://api.github.com/user/repos',
  model: Repo,

  getByRepoName(fullName) {
    let model = this.findWhere({ full_name: fullName });
    if(!model) {
      model = new Repo({ full_name: fullName });
    }
    model.fetch();
    return model;
  }
});
