const config = {
  'localhost' : {
    authUrl: 'https://labelr-localhost.herokuapp.com/authenticate/',
    clientID: 'f8dd69187841cdd22a26'
  },
  'lablr.surge.sh': {

  }
}[location.hostname];

export default config;
