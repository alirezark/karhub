import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import Intro from './Intro';
import SelectTemplate from './SelectTemplate';
import Steps from './Steps';
import PersonalInfo from './PersonalInfo';
import WorkExperience from './WorkExprerience';
import EducationExperience from './EducationExperience';
import Skills from './Skills';
import Final from './Final';

export function Company() {
  return (
    <div>
      <Helmet>
        <title>CV</title>
        <meta name="description" content="Description of Company" />
      </Helmet>
      <Switch>
        <Route exact path="/CVMaker/Intro" component={Intro} />
        <Route exact path="/CVMaker/Final" component={Final} />
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
        <Route
          exact
          path="/CVMaker/EducationExperience"
          component={EducationExperience}
        />
        <Route exact path="/CVMaker/Skills" component={Skills} />
      </Switch>
    </div>
  );
}

export default withRouter(Company);
