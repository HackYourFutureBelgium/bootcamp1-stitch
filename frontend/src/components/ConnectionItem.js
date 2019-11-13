import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, Card, Avatar } from 'antd';

function ConnectionItem({ connection, disconnect }) {
  const { name, role, id } = connection;

  return (
    <Card style={{ width: 600, border:'none'}}>
    <div>
      <Avatar className="connection-avatar" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <h2 style={{textTransform:'capitalize', margin: '10px 0px'}}>{name}</h2>
      <h3 style={{textTransform:'capitalize', margin: '10px 0px'}}>{role}</h3>
      <Button>see the profile</Button>
      <Button onClick={() => disconnect(id)}>disconnect</Button>
    </div>
    </Card>
  );
}

export default ConnectionItem;
