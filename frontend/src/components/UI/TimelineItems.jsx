import React, { Component } from 'react';
import { Timeline, Icon, Avatar, Card, Button } from 'antd';
import '../../styles/style.css';
import '../../styles/styleProfile.css';
import PropTypes from 'prop-types';

const { Meta } = Card;

const cardStyle = {
  backgroundColor: '#e6fffb',
  color: '#333'
};

export class TimelineItems extends Component {
  render() {
    return (
      <div>
        <Timeline.Item color='black' dot={<Icon type='github' style={{ fontSize: '20px' }} />}>
          <h1>{this.props.detail.time}</h1>

          <Card hoverable style={cardStyle} actions={[<Icon type='github' key='setting' />]}>
            <p>{this.props.detail.url}</p>
            <Meta
              avatar={
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              }
              title='Card title'
            />
            <h3>{this.props.detail.skill}</h3>
            <h2>{this.props.detail.title}</h2>
            <p>{this.props.detail.description}</p>
          </Card>

          <Button
            onClick={this.props.delTodo.bind(this, this.props.detail.url)}
            style={{ color: 'red' }}
          >
            Delete
          </Button>
        </Timeline.Item>
      </div>
    );
  }
}

//PropTypes
TimelineItems.propTypes = {
  detail: PropTypes.object.isRequired
};

export default TimelineItems;
