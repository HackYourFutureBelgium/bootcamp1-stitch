import React, {Component} from 'react';
import {Button} from 'antd';
import HorizontalLoginForm from './HorizontalLoginForm';

class SignUpSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  showLoginForm(){
    this.setState({
      visible: !this.state.visible,
    });
  }

  clickHandleSignIn = e =>{
    e.preventDefault();
    this.showLoginForm();
  }
  render(){
    const visible = this.state.visible;
    let clicked;
    if (visible) {
      clicked = <span className="signupSection__login">Already a Stitcher <a onClick={this.clickHandleSignIn} href="#">log in here</a></span>;
    } else {
      clicked = <HorizontalLoginForm toggleCancel={this.showLoginForm}/>;
    }
    return (
      <section className="signupSection">
        <h1 className="signupSection__title">Let's stitching your skills</h1>
        <Button className="app-header__button-login"  type="primary" size="large">Be a Stitcher</Button>
        {clicked}
      </section>
    );
  }


};


export default SignUpSection;
