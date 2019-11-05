import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      classesAreLoading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/classes', { headers: { 'Content-Type': 'application/json' } })
      .then(r => r.json())
      .then(classes => {
        this.setState({ classes, classesAreLoading: false });
        console.log(classes);
      });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default App;
