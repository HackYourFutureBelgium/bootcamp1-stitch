import React from 'react';
import Timeline1 from '../components/UI/Timeline';
import { Row, Col, Icon, Popconfirm, message, Button, Avatar, Card } from 'antd';
import AddPost from './UI/AddPost';
import '../styles/styleProfile.css';

const text = 'Are you sure to delete this task?';

function confirm() {
  message.info('Clicked on Yes.');
}

class PersonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: '',
      title: '',
      description: '',
      url: '',
      time: ''
    };
  }

  handleSubmit = async value => {
    const { skill, title, description, url, time } = value;

    await this.setState({
      skill,
      title,
      url,
      description,
      time
    });
    console.log(this.state);
  };

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
            </container>
          </Col>
          <Col span={2}>
            <Button>
              <Icon type="search" />
              Filter by skils
            </Button>

            <Popconfirm
              placement="bottom"
              title={text}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button style={{ fontSize: '20px' }}>Delete</Button>
            </Popconfirm>
          </Col>
          <Col span={15} style={{ padding: '40px' }}>
            <AddPost onSubmit={this.handleSubmit} />
            <Timeline1 details={this.state} />
          </Col>
        </Row>
        <hr />
        <hr />
      </div>
    );
  }
}

export default PersonDetail;
