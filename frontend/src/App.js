import React, { Component } from 'react';
import Routes from './routes/routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Context from './Context';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    const user = localStorage.getItem('user');
    if (user === null){
      this.state = {
        user: {
          email: '',
          name: ''
        }
      };
    } else {
      this.state = {
        user: JSON.parse(user),
      };
    }
  }

  setAuthenticatedUser = user =>{
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({ user });
  };

  render() {
    const context = {
     user: this.state.user,
     setAuthenticatedUser: this.setAuthenticatedUser
   }
    return (
        <div className="App">
          <Context.Provider value={context}>
            <Router>
              <Header />
              <Routes />
              <Footer />
            </Router>
          </Context.Provider>
        </div>
    );
  }
}

export default App;
