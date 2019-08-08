/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import SearchContainer from './SearchContainer';
import Features from './Features';
import HireUrgent from './HireUrgent';
import PopularTests from './PopularTests';
import PopularJobs from './PopularJobs';
import TopJobsCategory from './TopJobsCategory';
import EmployersView from './EmployersView';
import Companies from './Companies';
import LatestContent from './LatestContent';

export default function HomePage(props) {
  return (
    <div>
        <SearchContainer />
        <Features />
        <HireUrgent />
        <PopularTests />
        <PopularJobs />
        <TopJobsCategory />
        <EmployersView />
        <Companies />
        <LatestContent />
    </div>
  );
}
