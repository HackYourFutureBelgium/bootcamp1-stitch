import React, { Component } from 'react';
import { Input, Card, Button, Row, Col, Form } from 'antd';

const { Search } = Input;

export default class ToLearnForm extends Component {
  handleOnClick = (e) => {
    const skill = new FormData(e.target);

    e.preventDefault();
    this.props.handleOnSubmit(skill.get('skill'));
  };

  render() {
    return (
      <form class="profile-card__skills-form" onSubmit={this.handleOnClick}>
        <Input id="skill" type="text" name="skill" placeholder="Enter a topic" />
        <br />
        <Button>Add topic</Button>
      </form>
    );
  }
}
