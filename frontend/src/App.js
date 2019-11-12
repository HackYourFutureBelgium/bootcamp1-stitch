import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Context from './Context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        name: ''
      }
    };
  }

  componentDidMount() {

  }

  setAuthenticatedUser = user =>{
    this.setState({ user });
  };

  render() {
    const context = {
      user: this.state.user,
      setAuthenticatedUser: this.setAuthenticatedUser
    }
    return (
      <div className="app">
        <Context.Provider value={context}>
          <Header />
          <Main />
          <Footer />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
