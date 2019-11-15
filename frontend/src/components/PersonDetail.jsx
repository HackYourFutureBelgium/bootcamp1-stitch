import React from 'react';
import Timeline1 from '../components/UI/Timeline';
import { Row, Col } from 'antd';
import AddPost from './UI/AddPost';
import ProfileCard from './ProfileCard';

class PersonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPosts: null,
      postsAreLoading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/posts', { headers: { 'Content-Type': 'application/json' } })
      .then((r) => r.json())
      .then((posts) => {
        this.setState({ posts, postsAreLoading: false });
      });
  }

  handleSubmit = async (value) => {
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
  delTodo = (url) => {
    console.log(url);
    this.setState({ posts: [...this.state.posts.filter((post) => post.url !== url)] });
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={7}>
            <ProfileCard />
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
