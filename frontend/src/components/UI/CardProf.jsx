import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const cardStyle = {
  backgroundColor: '#e6fffb',
  color: 'blue'
};

export default class CardProf extends Component {
  render() {
    return (
      <div>
        <Card
          style={cardStyle}
          hoverable
          actions={[
            <Icon type="facebook" key="setting" />,
            <Icon type="github" key="edit" />,
            <Icon type="radar-chart" key="edit" />,
            <Avatar src="https://picsum.photos/id/8/200/200" />
          ]}
        >
          <Meta
            avatar={<Avatar src="https://picsum.photos/id/61/200/200" />}
            title="Card title"
            description="This is the description"
          />
          <p>Lorem ipsum dolor sit amet.</p>
          <br />
        </Card>
      </div>
    );
  }
}
