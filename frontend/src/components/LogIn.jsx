import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './UI/Button';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Input } from 'antd';

const style = {
  height: '300px',
  border: '2px solid #5d5d5d'
};

export default class LogIn extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Row>
          <Col span={8} style={style}>
            <h1>Log In</h1>
          </Col>
          <Col span={8} style={style}>
            <Card style={{ border: '1px solid #d6e0f5', margin: '40px' }}>
              <Input placeholder="email:" style={{ border: '2px solid #5b82d7' }} />
              <Input.Password
                placeholder="input password:"
                style={{ border: '2px solid #5b82d7' }}
              />
            </Card>
          </Col>
          <Col span={8} style={style}>
            <Button>Apply now</Button>
            <Button primary>Apply123 now</Button>
            <Button style={{ background: '#6eff' }}>Apply now</Button>
          </Col>
        </Row>
        <Footer />
      </React.Fragment>
    );
  }
}
