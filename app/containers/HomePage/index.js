/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import GlobalHeader from '../../components/GlobalHeader';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Rtl from '../../components/Rtl';

const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: ['IRANSans', 'Segoe UI'].join(','),
    fontSize: 14,
  },
});

export default function HomePage() {
  return (
    <Rtl>
      <ThemeProvider theme={theme}>
        <GlobalHeader />
      </ThemeProvider>
    </Rtl>
  );
}
