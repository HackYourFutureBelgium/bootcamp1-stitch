import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function ConnectionItem({ connection, disconnect }) {
  const { name, role, id } = connection;

  return (
    <li>
      <img src="./images/simplephoto.jpeg" width="50px" height="40px" alt="photoofconnect" />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <Button>see the profile</Button>
      <Button onClick={() => disconnect(id)}>disconnect</Button>
    </li>
  );
}

export default ConnectionItem;
