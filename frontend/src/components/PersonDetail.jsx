import React from 'react';
import Timeline1 from '../components/UI/Timeline';
import { Row, Col, Icon, Popconfirm, message } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './UI/Button';
import AddCard from './UI/AddCard';

const text = 'Are you sure to delete this task?';

function confirm() {
  message.info('Clicked on Yes.');
}

class PersonDetail extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={6}></Col>
          <Col span={3}>
            <Button>
              <Icon type="folder-add" style={{ fontSize: '20px' }} />
            </Button>
            <Button primary>
              <Icon type="radar-chart" style={{ fontSize: '20px' }} />
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
          </Col>
          <Col span={15}>
            <AddCard></AddCard>
            <Timeline1 />
          </Col>
        </Row>
        <hr />
        <hr />
      </div>
    );
  }
}

export default PersonDetail;
