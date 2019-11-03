import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import Intro from './Intro';
import SelectTemplate from './SelectTemplate';
import Steps from './Steps';
import PersonalInfo from './PersonalInfo';
import WorkExperience from './WorkExprerience';

export function Company() {
  return (
    <div>
      <Helmet>
        <title>CV</title>
        <meta name="description" content="Description of Company" />
      </Helmet>
      <Switch>
        <Route exact path="/CVMaker/Intro" component={Intro} />
        <Route exact path="/CVMaker/*" component={Steps} />
      </Switch>
      <Switch>
        <Route
          exact
          path="/CVMaker/SelectTemplate"
          component={SelectTemplate}
        />
        <Route exact path="/CVMaker/PersonalInfo" component={PersonalInfo} />
        <Route
          exact
          path="/CVMaker/WorkExperience"
          component={WorkExperience}
        />
      </Switch>
    </div>
  );
}

export default withRouter(Company);
