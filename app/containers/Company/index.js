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

export function Company() {
  return (
    <div>
      <Helmet>
        <title>Company</title>
        <meta name="description" content="Description of Company" />
      </Helmet>
      <Navigations />
      <Switch>
        <Route exact path="/Company/:id" component={GeneralView} />
      </Switch>
    </div>
  );
}

export default withRouter(Company);
