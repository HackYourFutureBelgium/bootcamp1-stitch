import React, { Component } from 'react';
import { Timeline, Icon, Avatar, Card } from 'antd';
import '../../styles/style.css';
import '../../styles/styleProfile.css';
import Button from './Button';

const { Meta } = Card;

const cardStyle = {
  backgroundColor: '#e6fffb',
  color: '#333'
};

export default class Timeline1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Timeline mode="alternate">
          <Timeline.Item color="purple">
            <h2>{this.props.details.url}</h2>
            <p>{this.props.details.description}</p>
            <h3>{this.props.details.skill}</h3>
            <Card
              style={{ cardStyle }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />
              ]}
            >
              <h1>{this.props.details.title}</h1>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Timeline.Item>
          <Timeline.Item color="red" dot={<Icon type="radar-chart" />}>
            <p>Solve initial network problems 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="radar-chart" />}>
            <p>
              {' '}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="codepen" style={{ fontSize: '20px' }} />}>
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item color="black" dot={<Icon type="github" style={{ fontSize: '20px' }} />}>
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item
            dot={<Icon type="github" style={{ fontSize: '30px' }} />}
            placement="rightTop"
          >
            Technical testing 2015-09-01 5555555
          </Timeline.Item>
          <Timeline.Item color="yellow">Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="facebook" theme="filled" style={{ fontSize: '30px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Timeline.Item>
          <hr></hr>
          <hr></hr>
          <Button style={{ marginLeft: 500, whiteSpace: 'nowrap' }}>
            <a href="http://localhost:3000/profile">Go Back</a>
            <Icon type="radar-chart" style={{ fontSize: '29px' }} />
          </Button>

          <hr></hr>
        </Timeline>
      </div>
    );
  }
}
