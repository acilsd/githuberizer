const config = {
  'localhost' : {
    authUrl: 'https://labelr-localhost.herokuapp.com/authenticate/',
    clientID: 'f8dd69187841cdd22a26'
  },
  'githuberizer.herokuapp.com': {
    authUrl: 'https://gitoauth.herokuapp.com/authenticate/',
    clientID: 'ec90895a4e16d53fdd99'
  }
}[location.hostname];

export default config;
