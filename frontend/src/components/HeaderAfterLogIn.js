import React, { Component } from 'react';
import {Button, Modal} from 'antd';
import NormalLoginForm from './NormalLoginForm';
import { withContext } from '../Context';
class HeaderAfterLogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  }

  componentDidMount() {

  }


  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const { user } =  this.props;

    return (
      <header className="app-header">
        <div className="app-header__box">
          <img src="stitchlogo.png" alt="Stitch Logo" title="Stitch" height="85" width="85" />
          <h1 className="app-header__title">Stitch</h1>
        </div>
        <nav>
          <a href="http://localhost:3000/profile">profile</a>
          <a href="http://localhost:3000/">main</a>
          <a href="http://localhost:3000/persondetail">persondetail</a>
          <a href="http://localhost:3000/connections">connections</a>
          <a href="http://localhost:3000/notification">notifications</a>
          <a href="http://localhost:3000/">log out</a>
        </nav>
      </header>
    );
  }
}

export default withContext(HeaderAfterLogIn);
