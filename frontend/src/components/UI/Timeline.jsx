import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';
import CardProf from './CardProf';
import '../../styles/style.css';
import '../../styles/styleProfile.css';
import Button from './Button';

export default class Timeline1 extends Component {
  render() {
    return (
      <div>
        <Timeline mode="alternate">
          <Timeline.Item color="purple">
            <p>lorem15 Create a services site 2015-09-01</p>
            {<CardProf />}
            <img
              src="https://picsum.photos/id/67/200/200"
              alt="Smiley face"
              width="90"
              height="90"
            ></img>
            <p>
              <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
            </p>
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
            Technical testing 2015-09-01
            <CardProf />
            5555555
          </Timeline.Item>
          <Timeline.Item color="yellow">
            Create a services site 2015-09-01
            <CardProf />
          </Timeline.Item>
          <Timeline.Item color="green">
            Solve initial network problems 2015-09-01
            <CardProf placement="rightTop" />
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="facebook" theme="filled" style={{ fontSize: '30px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
            {<CardProf />}
            <img
              src="https://picsum.photos/id/15/200/200"
              alt="Smiley face"
              width="90"
              height="90"
            ></img>
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
