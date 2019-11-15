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
import SendCVDialog from 'app/containers/SendCvDialog';
import GlobalFooter from 'app/components/GlobalFooter';
import { MainCV, MainCV2 } from 'app/containers/cv';

function CVRoutes() {
  return (
    <Switch>
      <Route exact path="/CV/t1/*" component={MainCV} />
      <Route exact path="/CV/t2/*" component={MainCV2} />
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
      <SendCVDialog />
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
