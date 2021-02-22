import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from './App';
import Squads from './pages/PecegeSquads';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/squad/:name" component={Squads} />
    </Switch>
  </Router>
);
export default Routes;
