import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from 'react';
import { Timeline } from 'antd';
import ProfileCard from '../ProfileCard';

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value, skill }) => (
  <div>
    <Form.Item>
      <Input rows={4} onChange={onChange} value={value} placeholder="add link..." />
      <Input rows={4} onChange={onChange} placeholder="skill: " skill={skill}></Input>
    </Form.Item>

    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Link
      </Button>
    </Form.Item>
  </div>
);

class AddCard extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
    skill: ''
  };

  handleSubmit = () => {
    if (!this.state.value & !this.state.skill) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        skill: '',
        comments: [
          {
            author: 'Tamar',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
              <div>
                <Timeline.Item color="purple" style={{ width: '500px' }}>
                  <p>{moment(this.state.creation).format()}</p>
                  <p>{this.state.value}</p>
                  <p>{this.state.skill}</p>

                  <ProfileCard />
                  <img
                    src="https://picsum.photos/id/7/200/200"
                    alt="Smiley face"
                    width="90"
                    height="90"
                  ></img>
                  <p>
                    <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
                  </p>
                </Timeline.Item>
              </div>
            ),

            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      skill: e.target.skill
    });
    console.log(e.target);
  };

  render() {
    const { comments, submitting, value, skill } = this.state;

    return (
      <div>
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
              skill={skill}
            />
          }
          style={{ width: 500, height: 300 }}
        />
        {comments.length > 0 && <CommentList comments={comments} />}
      </div>
    );
  }
}
export default AddCard;
