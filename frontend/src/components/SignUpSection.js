import React, {Component} from 'react';
import {Button} from 'antd';
import HorizontalLoginForm from './HorizontalLoginForm';
import RegistrationForm from './RegistrationForm';

class SignUpSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationVisible: false,
      loginVisible: false,
    };
  }
  showLoginForm = () => {
    this.setState({
      loginVisible: !this.state.loginVisible,
      registrationVisible: false,
    });
  }
  showSignupForm = () => {
    this.setState({
      registrationVisible: !this.state.registrationVisible,
    });
  }

  clickHandleSignIn = e =>{
    e.preventDefault();
    this.showLoginForm();
  }
  clickHandleSignup = e =>{
    e.preventDefault();
    this.showSignupForm();
  }
  render(){
    const {loginVisible, registrationVisible}= this.state;
    let clicked;
    if (loginVisible) {
      clicked = <HorizontalLoginForm toggleCancel={this.showLoginForm} />;
    } else {
      clicked = <span className="signupSection__login">Already a Stitcher <button className="button-link" onClick={this.clickHandleSignIn}>log in here</button></span>;
    }
    return (
      <section className="signupSection">
        <h1 className="signupSection__title">Let's stitch your skills</h1>
        {!registrationVisible && <Button className="app-header__button-signup" onClick={this.clickHandleSignup} type="primary" size="large">Sign up</Button>}
        {registrationVisible && <RegistrationForm toggleCancel = {this.showSignupForm}/>}
        {clicked}
      </section>
    );
  }


};


export default SignUpSection;
