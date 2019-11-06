import React, { Component } from 'react';
import {Button, Modal} from 'antd';
import NormalLoginForm from './NormalLoginForm';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleLogIn = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {

  }


  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <header className="app-header">
        <h1 className="app-header__title">Stitch</h1>
        <nav>
          <Button className="app-header__button-login" icon="login" onClick={this.showModal}>Log in</Button>
          <Modal
            title="Log in"
            visible={visible}
            onOk={this.handleLogIn}
            okText="Log in"
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
          >
          <NormalLoginForm />
        </Modal>
        </nav>
      </header>
    );
  }
}

export default Header;
