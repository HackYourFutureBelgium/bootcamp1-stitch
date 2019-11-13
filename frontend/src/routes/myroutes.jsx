import React from 'react';
import '../styles/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import PersonDetail from '../components/PersonDetail';
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

            {/*<Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:id" component={Profile} />*/}
            <Route exact path="/persondetail" component={PersonDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
