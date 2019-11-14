/**
 *
 * Company
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import { GeneralView } from './GeneralView';
import Navigations from './Navigations';
import Dashboard from './Dashboard';
import { Advertisement } from './Advertisement';
import { Folders } from './FolderList';
import { Folder } from './FolderView';
import { Credit } from './Credit';
import { SearchCV } from './SearchCV';
import { TopCompanies } from './TopCompanies';
import { FolderCV } from './FolderCV';

export function Company() {
  return (
    <div>
      <Helmet>
        <title>Company</title>
        <meta name="description" content="Description of Company" />
      </Helmet>
      <Navigations />
      <Switch>
        <Route exact path="/Company/Dashboard" component={Dashboard} />
        <Route exact path="/Company/Advertisements" component={Advertisement} />
        <Route exact path="/Company/Folders" component={Folders} />
        <Route exact path="/Company/Folder/CV" component={FolderCV} />
        <Route exact path="/Company/Folder/:id" component={Folder} />
        <Route exact path="/Company/Credit" component={Credit} />
        <Route exact path="/Company/Search_CV" component={SearchCV} />
        <Route exact path="/Company/Top" component={TopCompanies} />
        <Route exact path="/Company/:id" component={GeneralView} />
      </Switch>
    </div>
  );
}

export default withRouter(Company);
