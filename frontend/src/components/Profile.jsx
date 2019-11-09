import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Timeline, Icon, Row, Col, Avatar, Card } from 'antd';
import CardProf from './UI/CardProf';
import '../index.css';
import '../styles/styleProfile.css';
import Button from './UI/Button';

import { Popconfirm, message } from 'antd';

const text = 'Are you sure to delete this task?';

function confirm() {
  message.info('Clicked on Yes.');
}

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr></hr>
        <hr></hr>

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
            </container>
          </Col>
          <Col span={1}>
            <Button>Welcome</Button>
          </Col>

          <Col span={15}>
            <Timeline mode="alternate">
              <Button primary>
                <Icon type="radar-chart" style={{ fontSize: '20px' }} />
              </Button>
              <Button>
                <Icon type="folder-add" style={{ fontSize: '20px' }} />
              </Button>
              <Popconfirm
                placement="bottom"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <Button style={{ fontSize: '20px' }}>DELETE Bottom</Button>
              </Popconfirm>
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon type="codepen" style={{ fontSize: '20px' }} />}>
                Network problems being solved 2015-09-01
              </Timeline.Item>
              <Timeline.Item
                color="black"
                dot={<Icon type="github" style={{ fontSize: '20px' }} />}
              >
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
              <Timeline.Item
                dot={<Icon type="facebook" theme="filled" style={{ fontSize: '30px' }} />}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
                Go Back
                <Icon type="radar-chart" style={{ fontSize: '29px' }} />
              </Button>
              <hr></hr>
              <hr></hr>
              <hr></hr>
              <hr></hr>

              <hr></hr>
              <hr></hr>
            </Timeline>
          </Col>
        </Row>

        <Footer />
      </div>
    );
  }
}
