import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ButtonS from './UI/Button';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Input } from 'antd';

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Log In</h1>
        <Card
          style={{
            width: 400
          }}
        >
          <Input placeholder="email:" />
          <Input.Password placeholder="input password:" />
        </Card>
        <ButtonS />
        <Footer />
      </div>
    );
  }
}
