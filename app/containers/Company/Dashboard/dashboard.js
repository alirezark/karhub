import React from 'react';
import Search from './contents/search';
import { Advertisement } from '../Advertisement';
import { Credit } from '../Credit';
import { Folders } from '../FolderList';

function Dashboard() {
  return (
    <div>
      <Search />
      <Advertisement embedded />
      <Credit embedded />
      <Folders embedded />
    </div>
  );
}

export default Dashboard;
