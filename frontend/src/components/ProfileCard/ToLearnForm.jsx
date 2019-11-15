import React, { Component } from 'react';
import { Input, Card, Button, Row, Col, Form } from 'antd';

const { Search } = Input;

export default class ToLearnForm extends Component {
  state = { topic: '' };

  handleTopicType = (e) => {
    this.setState({ topic: e.currentTarget.value });
  };

  handleOnClick = (e) => {
    this.props.handleOnSubmit(this.state.topic);
    this.setState({ topic: '' });
  };

  render() {
    return (
      <form class="profile-card__skills-form" onSubmit={this.handleOnClick}>
        <Input
          id="skill"
          type="text"
          name="skill"
          onChange={this.handleTopicType}
          placeholder="Enter a topic"
        />
        <br />
        <Button onClick={this.handleOnClick}>Add topic</Button>
      </form>
    );
  }
}
