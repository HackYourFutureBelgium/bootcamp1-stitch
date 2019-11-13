import React, { Component } from 'react';
import Routes from './routes/routes';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {};
  render() {
    return (
        <div className="App">
          <Header />
          <Routes />
          <Footer />
        </div>
    );
  }
}

export default App;
