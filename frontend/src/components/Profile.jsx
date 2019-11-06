import React, { Component } from 'react';
import Pages from '../api/pagination/Pages';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <Pages />
        </section>
        welcome to profile
        <Footer />
      </div>
    );
  }
}
