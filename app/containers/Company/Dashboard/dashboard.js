import React from 'react';
import Search from './contents/search';
import { Advertisement } from '../Advertisement';

function Dashboard() {
  return (
    <div>
      <Search />
      <Advertisement embedded />
    </div>
  );
}

export default Dashboard;
