import React, { Component } from 'react';
import MyRoutes from './routes/myroutes';
import './styles/style.css';
import './index.css';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <MyRoutes />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
