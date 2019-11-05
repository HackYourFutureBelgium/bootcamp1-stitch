import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class View extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>helllo view page</h2>
        <Footer />
      </div>
    );
  }
}

export default View;
