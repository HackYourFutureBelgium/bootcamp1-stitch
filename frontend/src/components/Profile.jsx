import React, { Component } from 'react';
import { Icon, Row, Col, Avatar, Card } from 'antd';
import Timeline1 from './UI/Timeline';
import Button from './UI/Button';
import Comments from './UI/Comments';
import jwt_decode from 'jwt-decode'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      errors: ""
    }
  }
  componentDidMount () {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email
    })
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={7} hoverable style={{ border: '2px solid blue' }}>
            <container id="prof_img">
              <Avatar size={154} icon="user" alt="profimg" />
              <p>
                ipsum dolor sit amet consectetur adipisicing elit. Inventore similique obcaecati
                aliquam quam illo fuga molestias doloribus ipsam, recusandae ullam magni cupiditate
                corporis corrupti delectus exercitationem odit?
              </p>
              <Card
                actions={[
                  <Icon type="facebook" key="setting" />,
                  <Icon type="github" key="edit" />,
                  <Icon type="radar-chart" key="edit" />,
                  <Avatar src="https://picsum.photos/id/8/200/200" />
                ]}
              ></Card>
              <Comments />
            </container>
          </Col>
          <Col span={1} style={{ padding: '40px' }}>
            <Button>ADD Comments</Button>
          </Col>
          <hr />
          <hr />
          <Col span={15} style={{ padding: '40px' }}>
            <Timeline1 />
          </Col>
        </Row>
      </div>
    );
  }
}
