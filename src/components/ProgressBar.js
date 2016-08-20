import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class ProgressBar extends Component {
  render() {
    return (
      <div class="progress-bar">
        <MuiThemeProvider muiTheme={muiTheme}>
          <CircularProgress size={2}/>
        </MuiThemeProvider>
      </div>
        );
  }
}

export default ProgressBar;
