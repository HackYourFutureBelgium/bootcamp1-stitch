import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { withContext } from '../Context';
import ApiClient from '../ApiClient';

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.toggleCancel,
      email: '',
      password: ''
    };
  }
  handleEmailChanged = e => {
    this.setState({ email: e.currentTarget.value });
  }

  handlePasswordChanged = e => {
    this.setState({ password: e.currentTarget.value });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    const { email, password } = this.state;
    ApiClient.login(email, password).then(user => {
      const { setAuthenticatedUser } = this.props;
      setAuthenticatedUser(user);
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          <Input
            type="email"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            value={email}
            onChange={this.handleEmailChanged}
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handlePasswordChanged}
            />
        </Form.Item>
      </Form>
    );
  }
}

export default withContext(NormalLoginForm);
