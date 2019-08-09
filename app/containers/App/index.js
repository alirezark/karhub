/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import GlobalHeader from 'components/GlobalHeader';
import GlobalFooter from 'components/GlobalFooter';
import HomePage from 'containers/HomePage/Loadable';
import Jobs from 'containers/Jobs/Loadable';

import '../../assets/style.scss';

import Rtl from '../../components/Rtl';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4BBB81',
    },
  },
  direction: 'rtl',
  typography: {
    fontFamily: ['iranyekan', 'Segoe UI'].join(','),
    fontSize: 14,
    h1: {
      fontSize: '1.63rem',
      color: '#4A4A4A',
    },
    h2: {
      fontSize: '1.18rem',
      color: '#4A4A4A',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    h6: {
      fontSize: '.88rem',
    },
    subtitle1: {
      color: '#606062',
    },
    subtitle2: {
      color: '#979797',
    },
  },
});

export default function App() {
  return (
    <Rtl>
      <ThemeProvider theme={theme}>
        <Route component={GlobalHeader} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Jobs" component={Jobs} />
        </Switch>
        <GlobalFooter />
      </ThemeProvider>
    </Rtl>
  );
}
