import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/LogIn';
import LogOut from '../components/LogOut';
import Profile from '../components/Profile';
import NotFound from '../pages/NotFound';
import PersonDetail from '../components/PersonDetail';
import SignUp from '../components/SignUp';
import Main from '../components/Main';

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
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/persondetail" component={PersonDetail} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
