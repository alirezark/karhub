import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalHeader from 'app/containers/GlobalHeader';
import ScrollToTop from 'app/components/ScrollPageTop';
import HomePage from 'app/containers/HomePage/Loadable';
import Jobs from 'app/containers/Jobs/Loadable';
import Categories from 'app/containers/Categories/Loadable';
import Profile from 'app/containers/Profile/Loadable';
import Company from 'app/containers/Company/Loadable';
import CVMaker from 'app/containers/CVMaker/Loadable';
import SendSVDialog from 'app/containers/SendCvDialog/Loadable';
import GlobalFooter from 'app/components/GlobalFooter';
import MainCV from 'app/containers/cv';

function CVRoutes() {
  return (
    <Switch>
      <Route exact path="/CV/t1/*" component={MainCV} />
    </Switch>
  );
}

function CommonRoutes() {
  return (
    <>
      <GlobalHeader />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Jobs" component={Jobs} />
        <Route exact path="/Categories" component={Categories} />
        <Route exact path="/Profile" component={Profile} />
        <Route path="/Company/*" component={Company} />
        <Route path="/CVMaker/*" component={CVMaker} />
      </Switch>
      <Route exact path="/Jobs" component={SendSVDialog} />
      <GlobalFooter />
    </>
  );
}

function Routes() {
  return (
    <Switch>
      <Route exact path="/CV/*" component={CVRoutes} />
      <Route path="/*" component={CommonRoutes} />
    </Switch>
  );
}

export default Routes;
