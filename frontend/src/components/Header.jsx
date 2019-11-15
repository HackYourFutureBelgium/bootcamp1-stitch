import React, { Component } from 'react';
import { Button, Modal} from 'antd';
import NormalLoginForm from './NormalLoginForm';
import { withContext } from '../Context';
import { withRouter } from 'react-router-dom';
import API from '../API.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleLogIn = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
      const { email, password } = this.state;
      API.login(email, password).then(user => {
        const { setAuthenticatedUser } = this.props;
        setAuthenticatedUser(user);
        this.props.history.push('/persondetail');
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false
    });
  };
  showNavBar = () => {
    this.setState({
      navBarVisible: !this.state.navBarVisible
    });
  };
  clickHandleSignIn = e => {
    e.preventDefault();
    this.showLoginForm();
  };

  clickHandleLogOut = e =>{
    //removing the localStorage
    //localStorage.removeItem(user);
    console.log("clicked");
  }

  render() {
    const { visible, confirmLoading } = this.state;
    const { user } = this.props;
    const navBarVisible = user.email === '';
    return (
      <header className='app-header'>
        <div className='app-header__box'>
          <img src='stitchlogo.png' alt='Stitch Logo' title='Stitch' height='85' width='85' />
          <h1 className='app-header__title'>Stitch</h1>
        </div>
        {!navBarVisible && (
          <nav>
            <Button className="header-btn" style={{ color: '#002766'}} href='http://localhost:3000/persondetail' type='link'>
              Timeline
            </Button>
            <Button className="header-btn" style={{ color: '#002766'}} href='http://localhost:3000/connections' type='link'>
              Connections
            </Button>
            <Button className="header-btn" style={{ color: '#002766'}} href='http://localhost:3000/notification' type='link'>
              Notifications
            </Button>
            <Button className="header-btn" style={{ color: '#002766'}} href='http://localhost:3000/' onClick={this.clickHandleLogOut} type='link'>
              Log out
            </Button>
          </nav>
        )}
        {navBarVisible && (<Button className='app-header__button-login' icon='login' onClick={this.showModal}>
          Log in
        </Button>)}
        <Modal
          title='Log in'
          visible={visible}
          onOk={this.handleLogIn}
          okText='Log in'
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <NormalLoginForm />
        </Modal>
      </header>
    );
  }
}

export default withRouter(withContext(Header));
