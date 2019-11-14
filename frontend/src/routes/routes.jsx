import React from 'react';
import '../styles/index.css';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import PersonDetail from '../components/PersonDetail';
import Main from '../components/Main';
import Connection from '../components/Connection';
import Notification from '../components/Notification';


export default class MyRoutes extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        {/*<Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:id" component={Profile} />*/}
        <Route exact path="/persondetail" component={PersonDetail} />
        <Route exact path="/connections" component={Connection} />
        <Route exact path="/notification" component={Notification} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}
