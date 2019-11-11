import React, { Component } from 'react';
import Navbar from './components/layouts/headers/Navbar'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }


  render() {
    return (
      <header >
        <Navbar/>
      </header>
    );
  }
}

export default Header;
