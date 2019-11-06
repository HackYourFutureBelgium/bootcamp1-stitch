import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';


class ConnectionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
      <img src="./images/simplephoto.jpeg" width="50px" height="40px" alt="photoofconnect"/>
       <h2>tamar</h2>
       <h3>web developer</h3>
       <Button>see the profile</Button>
       <Button>disconnect</Button>
      </div>
    );
};
};
export default ConnectionItem;