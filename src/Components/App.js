/*
* All routes imported here in app component.
*/

import '../App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, QuestionPage, ResponsePage } from './index';

const App = () => (
  <div>
    <Router>
      <Switch>
        {/* Primary Route */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test-covid-questions/:email" component={QuestionPage} />
        <Route exact path="/questions-submitted" component={ResponsePage} />
      </Switch>
    </Router>
  </div>
);

export default App;
