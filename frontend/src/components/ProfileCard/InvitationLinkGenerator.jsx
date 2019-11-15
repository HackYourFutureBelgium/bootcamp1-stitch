import React, { Component } from 'react';
import { Input, Row, Col, Button } from 'antd';

const TodoComponent = {
  width: '300px',
  margin: '30px auto'
};

export default class InvitationLinkGenerator extends Component {
  render() {
    return (
      <>
        <Row style={{ width: 400 }}>
          <Col>
            <Input style={{ width: 200 }} placeholder="Generate a URL"></Input>
          </Col>

          <Button>Generate</Button>
        </Row>
      </>
    );
  }
}
