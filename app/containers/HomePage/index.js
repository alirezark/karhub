/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import GlobalHeader from '../../components/GlobalHeader';
import SearchContainer from './SearchContainer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Rtl from '../../components/Rtl';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4BBB81',
    },
  },
  direction: 'rtl',
  typography: {
    fontFamily: ['IRANSans', 'Segoe UI'].join(','),
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      color: '#4A4A4A',
    },
    h2: {
      fontSize: '1.2rem',
      color: '#4A4A4A',
    },
    subtitle2: {
      color: '#979797',
    },
  },
});

export default function HomePage() {
  return (
    <Rtl>
      <ThemeProvider theme={theme}>
        <GlobalHeader />
        <SearchContainer />
      </ThemeProvider>
    </Rtl>
  );
}
