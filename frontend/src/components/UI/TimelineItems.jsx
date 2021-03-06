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
            <h1>{this.props.detail.title}</h1>
            <Meta
              avatar={
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              }
              title=''
            />
            <h2>{this.props.detail.skill}</h2>

            <p>{this.props.detail.description}</p>
            <a href='#!' target='_blanck'>
              {this.props.detail.url}
            </a>
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
