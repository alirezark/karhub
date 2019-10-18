import React from 'react';
import Search from './contents/search';
import { Advertisement } from '../Advertisement';
import { Credit } from '../Credit';
function Dashboard() {
  return (
    <div>
      <Search />
      <Advertisement embedded />
      <Credit embedded />
    </div>
  );
}

export default Dashboard;
