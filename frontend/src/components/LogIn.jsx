import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './UI/Button';

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Login page</h1>
        <Button />
        <Footer />
      </div>
    );
  }
}
