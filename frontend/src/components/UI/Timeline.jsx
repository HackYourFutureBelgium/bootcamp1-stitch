
import React, { Component } from 'react';
import '../../styles/style.css';
import '../../styles/styleProfile.css';
import { Timeline, Icon, Avatar, Card } from 'antd';

const { Meta } = Card;

const cardStyle = {
  backgroundColor: '#e6fffb',
  color: '#333'
};

class Timeline1 extends Component {
  render() {
    const { details } = this.props;

    // TODO remove reverse and order by context date instead reverse()
    const $details = details.reverse().map(detail => (
      <React.Fragment key={detail.url}>
        <Timeline.Item color="black" dot={<Icon type="github" style={{ fontSize: '20px' }} />}>
          <h1>{detail.time}</h1>

          <Card
            hoverable
            style={cardStyle}
            actions={[<Icon type="github" key="setting" />, <p target="_blanck">{detail.url}</p>]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
            />
            <h3>{detail.skill}</h3>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
          </Card>
        </Timeline.Item>
      </React.Fragment>
    ));
    return (
      <React.Fragment>
        <Timeline>{$details}</Timeline>
      </React.Fragment>
    );
  }
}

export default Timeline1;
