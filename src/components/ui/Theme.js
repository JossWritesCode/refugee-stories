import { createMuiTheme } from '@material-ui/core/styles';

const cherryPink = '#C96567';
const mineralBlue = '#0f0f33';
const lightBlue = '#97aabd';

export default createMuiTheme({
  palette: {
    common: {
      pink: `${cherryPink}`,
      mineralBlue: `${mineralBlue}`,
      lightBlue: `${lightBlue}`
    },
    primary: {
      main: `${mineralBlue}`
    },
    secondary: {
      main: `${cherryPink}`
    }
  }
});
