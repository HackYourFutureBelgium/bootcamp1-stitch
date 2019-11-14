import React, { Component } from 'react';
import {Button, Modal} from 'antd';
import NormalLoginForm from './NormalLoginForm';
import Context from '../Context';
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

  render() {
    const { visible, confirmLoading } = this.state;
    const { user } =  this.props;

    return (
      <header className="app-header">
        <div className="app-header__box">
          <img src="stitchlogo.png" alt="Stitch Logo" title="Stitch" height="85" width="85" />
          <h1 className="app-header__title">Stitch</h1>
        </div>
        <nav>
          {user.name}
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

const HeaderWrapper = props => (
  <Context.Consumer>
    {({user, setAuthenticatedUser}) => (
      <Header
        user={user}
        setAuthenticatedUser={setAuthenticatedUser}
        {...props}
      />
    )}
  </Context.Consumer>
);
export default HeaderWrapper;
