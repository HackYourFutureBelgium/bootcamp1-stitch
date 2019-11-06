import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        welcome to profile
        <Footer />
      </div>
    );
  }
}
