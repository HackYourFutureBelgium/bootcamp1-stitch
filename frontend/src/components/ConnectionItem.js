import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class ConnectionItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, role, id } = this.props.connection;
    console.log(this.props);
    return (
      <li>
        <img src="./images/simplephoto.jpeg" width="50px" height="40px" alt="photoofconnect" />
        <h2>{name}</h2>
        <h3>{role}</h3>
        <Button>see the profile</Button>
        <Button>disconnect</Button>
      </li>
    );
  }
}
export default ConnectionItem;
