import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Button from '../UI/Button';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Header />
        <Main />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default Layout;
