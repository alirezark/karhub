import React from 'react';
import JobsProvider from './jobs.provider';
// eslint-disable-next-line import/no-named-default
import { default as JobsComponent } from './jobs';

const Jobs = () => (
  <JobsProvider>
    <JobsComponent />
  </JobsProvider>
);

export default Jobs;
