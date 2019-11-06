import React, { Component } from 'react';
import Header from './Header';
import { Typography } from 'antd';
import Footer from './Footer';

const { Title } = Typography;

export default class LogOut extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title>h1. Ant Design</Title>

        <Footer />
      </div>
    );
  }
}
