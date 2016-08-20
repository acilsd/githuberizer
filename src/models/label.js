/*eslint no-console: "off"*/
import Model from 'ampersand-model';
import app from 'ampersand-app';
import Mixins from '../utils/mixins';
import xhr from 'xhr';

export default Model.extend(Mixins, {
  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string'
  },
  session: {
    editing: {
      type: 'boolean',
      default: false
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },

  isNew() {
    return !this.saved;
  },

  update(attributes) {
    const oldAttr = this.getAttributes({ props: true, session: false });
    xhr({
      url: this.url(),
      json: attributes,
      method: 'PATCH',
      headers: {
        Authorization: 'token ' + app.user.token
      }
    },(err, req, body) => {
      if(err) {
        this.set(oldAttr);
        console.error('check your internet connection');
      }
    });
    this.set(attributes);
  }
});
