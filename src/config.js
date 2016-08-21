const config = {
  'localhost' : {
    authUrl: 'https://labelr-localhost.herokuapp.com/authenticate/',
    clientID: 'f8dd69187841cdd22a26'
  },
  'githubrzr.herokuapp.com': {
    authUrl: 'https://gitauth.herokuapp.com/authenticate/',
    clientID: '96855ea1c6d5749fe693'
  }
}[location.hostname];

export default config;
