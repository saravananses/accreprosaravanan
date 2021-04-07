import React from "react";
import { Route, Switch } from "react-router-dom";
// import IntlMessages from "util/IntlMessages";
import asyncComponent from "../../util/asyncComponent";

const SamplePage = ({ match }) => {
  return (
    <div className={`inner_pages`}>      
          <Switch>
            <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./admin'))} />
            <Route path={`${match.url}/users`} component={asyncComponent(() => import('./users'))} />
            <Route path={`${match.url}/accreditation`} component={asyncComponent(() => import('./accredation'))} />
          </Switch>
    </div>
  );
};

export default SamplePage;
