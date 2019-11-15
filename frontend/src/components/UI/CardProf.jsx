import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { Input } from 'antd';
import Profile from './../layouts/profile/Profile';

const { TextArea } = Input;

const onChange = e => {
  console.log(e);
};

const { Meta } = Card;

const cardStyle = {
  backgroundColor: '#ffd6e7',
  color: '#333'
};

export default class CardProf extends Component {
  render() {
    return (
      <div>
      <Profile/>
        {/* <Card
          style={cardStyle}
          hoverable
          actions={[<Avatar size={50} src='https://picsum.photos/id/2/200/200' />]}
        >
          <Meta avatar={<Avatar shape='square' size={250} icon='user' />} />

          <h1>Tamar</h1>
          <h3>Asashvili</h3>

          <p>
            Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae.
          </p>
          <br />
          <Input placeholder='New Topic I want to Learn' allowClear onChange={onChange} />

          <br />
          <TextArea placeholder='# React, #js ....' allowClear onChange={onChange} />
          <ul style={{ listStyle: 'none' }}>
            <li>#angular</li>
            <li>#js</li>
            <li>#css</li>
          </ul>
          <hr />
          <Input placeholder='Generate my invitation link' allowClear onChange={onChange} />
        </Card> */}
      </div>
    );
  }
}
