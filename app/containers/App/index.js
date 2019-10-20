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

import UserProvider from 'app/containers/GlobalHeader/UserProvider';
import GlobalHeader from 'containers/GlobalHeader';
import GlobalFooter from 'components/GlobalFooter';
import HomePage from 'containers/HomePage/Loadable';
import Jobs from 'containers/Jobs/Loadable';
import Categories from 'containers/Categories';
import SendSVDialog from 'containers/SendCvDialog';
import Profile from 'containers/Profile';
import Company from 'containers/Company';
import CVMaker from 'containers/CVMaker';

import ScrollToTop from 'components/ScrollPageTop';
import '../../assets/style.scss';

import Rtl from '../../components/Rtl';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4BBB81',
      light: '#79CCA1',
    },
    secondary: {
      main: '#4980FF',
    },
  },
  direction: 'rtl',
  typography: {
    fontFamily: ['iranyekan', 'Segoe UI'].join(','),
    fontSize: 14,
    color: '#4A4A4A',
    h1: {
      fontSize: '1.63rem',
      color: '#4A4A4A',
    },
    h2: {
      fontSize: '1.13rem',
      color: '#4A4A4A',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 16,
      fontWeight: 'bold',
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
        <UserProvider>
          <GlobalHeader />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Jobs" component={Jobs} />
            <Route exact path="/Categories" component={Categories} />
            <Route exact path="/Profile" component={Profile} />
            <Route path="/Company/*" component={Company} />
            <Route path="/CVMaker/*" component={CVMaker} />
          </Switch>
          <Route exact path="/Jobs" component={SendSVDialog} />
          <GlobalFooter />
        </UserProvider>
      </ThemeProvider>
    </Rtl>
  );
}
