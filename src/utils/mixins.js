import app from 'ampersand-app';

export default {
  ajaxConfig() {
    return {
      headers: {
        Authorization: 'token ' + app.user.token
      }
    };
  }
};
