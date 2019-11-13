import React, { Component } from 'react';
import MyRoutes from './routes/myroutes';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          <MyRoutes />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
