import React, { Component } from 'react';
import { Timeline, Icon, Avatar, Card } from 'antd';
import '../../styles/style.css';
import '../../styles/styleProfile.css';

const { Meta } = Card;

const cardStyle = {
  backgroundColor: '#e6fffb',
  color: '#333'
};

export class TimelineItems extends Component {
  render() {
    return (
      <div>
        <Timeline.Item color="black" dot={<Icon type="github" style={{ fontSize: '20px' }} />}>
          <h1>{this.props.details.time}</h1>

          <Card
            hoverable
            style={cardStyle}
            actions={[
              <Icon type="github" key="setting" />,
              <p target="_blanck">{this.props.details.url}</p>
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
            />
            <h3>{this.props.details.skill}</h3>
            <h2>{this.props.details.title}</h2>
            <p>{this.props.details.description}</p>
          </Card>
        </Timeline.Item>
      </div>
    );
  }
}

export default TimelineItems;
