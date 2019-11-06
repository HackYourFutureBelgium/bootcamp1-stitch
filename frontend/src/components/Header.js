import React, { Component } from 'react';

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
      <header className="app-header">
        <h1 className="app-header__title">Stitch</h1>
      </header>
    );
  }
}

export default Header;
