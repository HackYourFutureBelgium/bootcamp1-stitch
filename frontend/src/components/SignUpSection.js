import React from 'react';
import {Button} from 'antd';

const SignUpSection = () => {
  return (
    <section className="signupSection">
      <h1 className="signupSection__title">Let's stitching your skills</h1>
      <Button className="app-header__button-login"  type="primary" size="large">Be a Stitcher</Button>
      <span className="signupSection__login">Already a Stitcher <a href="#">log in here</a></span>
    </section>
  );

};


export default SignUpSection;
