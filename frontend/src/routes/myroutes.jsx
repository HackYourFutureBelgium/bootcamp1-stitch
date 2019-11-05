import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/LogIn';
import LogOut from '../components/LogOut';
import Profile from '../components/Profile';
import Layout from '../components/Layout';
import View from '../components/View';

export default class MyRoutes extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:id" component={View} />
          </Switch>
        </Router>
      </div>
    );
  }
}
