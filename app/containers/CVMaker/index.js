import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import Intro from './Intro';

export function Company() {
  return (
    <div>
      <Helmet>
        <title>CV</title>
        <meta name="description" content="Description of Company" />
      </Helmet>
      <Switch>
        <Route exact path="/CVMaker/Intro" component={Intro} />
      </Switch>
    </div>
  );
}

export default withRouter(Company);
