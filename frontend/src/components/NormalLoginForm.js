import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          <Input type="email"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
      </Form>
    );
  }
}

export default NormalLoginForm;
