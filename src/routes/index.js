import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./header_part"
import asyncComponent from "util/asyncComponent";
import Sidemenu from "./sidemenus"
const App = ({ match }) => (
  <div className={`accrepro_container`}>
    <Header/>
    <div className={`accrepro_body`}>
      <Sidemenu/>
      <div className={`accrepro_inner_body`}>
        <Switch>
          <Route path={`${match.url}ss`} component={asyncComponent(() => import('./SamplePage'))} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
