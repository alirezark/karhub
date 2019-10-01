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
        <Route exact path="/Company/:id" component={GeneralView} />
      </Switch>
    </div>
  );
}

export default withRouter(Company);
