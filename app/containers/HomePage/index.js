/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import GlobalHeader from '../../components/GlobalHeader';
import SearchContainer from './SearchContainer';
import Features from './Features';
import HireUrgent from './HireUrgent';
import PopularTests from './PopularTests';
import PopularJobs from './PopularJobs';
import TopJobsCategory from './TopJobsCategory';
import EmployersView from './EmployersView';
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
      fontSize: '1.63rem',
      color: '#4A4A4A',
    },
    h2: {
      fontSize: '1.18rem',
      color: '#4A4A4A',
    },
    h5: {
      fontSize: '1rem',
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

export default function HomePage() {
  return (
    <Rtl>
      <ThemeProvider theme={theme}>
        <GlobalHeader />
        <SearchContainer />
        <Features />
        <HireUrgent />
        <PopularTests />
        <PopularJobs />
        <TopJobsCategory />
        <EmployersView />
      </ThemeProvider>
    </Rtl>
  );
}
