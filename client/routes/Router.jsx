import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../components/App.jsx';
import NewEntry from '../components/NewEntry.jsx';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/newEntry" component={NewEntry} />
    </Router>
  );
};

export default Routes;
