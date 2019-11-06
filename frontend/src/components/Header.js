import React, { Component } from 'react';
import { Input, Button } from 'antd';

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
        <Button type="primary" icon="login">Log in</Button>
      </header>
    );
  }
}

export default Header;
