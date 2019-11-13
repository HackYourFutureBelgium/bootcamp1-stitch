import React from 'react';
import Timeline1 from '../components/UI/Timeline';
import { Row, Col, Icon, Popconfirm, message, Button, Card } from 'antd';
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
      posts: [
        {
          skills: '',
          title: '',
          description: '',
          url: '',
          time: ''
        }
      ]
    };
  }

  handleSubmit = async value => {
    const { posts } = this.state;
    const { skill, title, description, url, time } = value;
    const newPost = {
      skill,
      title,
      url,
      description,
      time
    };

    // TODO Before setting the new post to state, make API request and wait for successful response
    posts.push(newPost);
    await this.setState({ posts });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={7} style={{ border: '2px solid blue' }}>
            <p>
              ipsum dolor sit amet consectetur adipisicing elit. Inventore similique obcaecati
              aliquam quam illo fuga molestias doloribus ipsam, recusandae ullam magni cupiditate
              corporis corrupti delectus exercitationem odit?
            </p>
            <Card
              actions={[
                <Icon type="facebook" key="setting" />,
                <Icon type="github" key="edit" />,
                <Icon type="radar-chart" key="edit" />
              ]}
            ></Card>
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
            <Timeline1 details={this.state.posts} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PersonDetail;
