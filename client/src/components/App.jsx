import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Battle from './Battle';

const App = () => (
  <Router>
    <Switch>
      <Route path="/battle/:battleId" component={Battle} />
    </Switch>
  </Router>
);

export default App;
