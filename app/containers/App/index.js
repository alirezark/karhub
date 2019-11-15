/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import SharedContextProvider from 'app/components/SharedContext';
import UserProvider from 'app/containers/GlobalHeader/UserProvider';
import '../../assets/style.scss';

import { StyleSheetManager } from 'styled-components';
import stylisRTLPlugin from 'stylis-rtl';
import Routes from './contents/routes';
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
        <StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
          <SharedContextProvider>
            <UserProvider>
              <Routes />
            </UserProvider>
          </SharedContextProvider>
        </StyleSheetManager>
      </ThemeProvider>
    </Rtl>
  );
}
