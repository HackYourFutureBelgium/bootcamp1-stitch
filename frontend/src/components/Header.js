import React, { Component } from 'react';
import {Button} from 'antd';

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
        <nav>
          <Button className="app-header__button-login" icon="login">Log in</Button>
        </nav>
      </header>
    );
  }
}

export default Header;
