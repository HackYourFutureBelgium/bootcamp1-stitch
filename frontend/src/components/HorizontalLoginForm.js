import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

class HorizontalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.toggleCancel,
    };
  }
  componentDidMount() {
  }

  handleSubmit = e => {
    e.preventDefault();
  };
  handleCancel =  e =>{
    this.setState({
      visible: !this.state.false,
    });
  };

  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={this.handleCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default HorizontalLoginForm;
