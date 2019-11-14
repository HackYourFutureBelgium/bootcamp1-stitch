import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Notifications from './components/layouts/headers/Notifications';
import Profile from './components/layouts/profile/Profile';
import ApiClient from './ApiClient';
import RegistrationForm from './components/auth/RegistrationForm';
import LogInForm from './components/auth/LogInForm';

class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
      loggedInStatus:true,
      user:{}
    }
  }
   
   
  componentDidMount = async () => {
      
// console.log(this.state.results)
  }
         
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header {...this.props} loggedInStatus={this.state.loggedInStatus}/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/notifications' component={Notifications}/>
            <Route exact path='/profile' render = {props => (
                          <Profile  {...this.props} loggedInStatus={this.state.loggedInStatus} /> 
              )}
            />
            <Route exact path='/signup' component={RegistrationForm}/>
            <Route exact path='/login' component={LogInForm}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
   
  }
}

export default App;
