import React from 'react';
import Timeline1 from '../components/UI/Timeline';
import { Row, Col, Icon, Button, Card } from 'antd';
import AddPost from './UI/AddPost';
import '../styles/styleProfile.css';

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

  //delete todo
  delTodo = url => {
    this.setState({ posts: [...this.state.posts.filter(post => post.url !== url)] });
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
                <Icon type='facebook' key='setting' />,
                <Icon type='github' key='edit' />,
                <Icon type='radar-chart' key='edit' />
              ]}
            ></Card>
          </Col>
          <Col span={7}>
            <Button>
              <Icon type='search' />
              Filter by skils
            </Button>
          </Col>
          <Col span={10} style={{ padding: '40px' }}>
            <AddPost onSubmit={this.handleSubmit} />
            <Timeline1 details={this.state.posts} delTodo={this.delTodo} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PersonDetail;
