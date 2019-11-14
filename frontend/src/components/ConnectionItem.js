import React from 'react';
import 'antd/dist/antd.css';
import { Button, Card, Avatar } from 'antd';

function ConnectionItem({ connection, disconnect }) {
  const { name, role, id } = connection;

  return (
    <li>
      <Card style={{ width: 500, border: 'none' }}>
        <Avatar
          className='connection-avatar'
          size='large'
          src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        />
        <h2 style={{ color: '#002766', textTransform: 'capitalize', margin: '10px 0px' }}>
          {name}
        </h2>
        <h3 style={{ color: '#002766', textTransform: 'capitalize', margin: '10px 0px' }}>
          {role}
        </h3>
        <Button type='primary' style={{ margin: '0px 5px' }}>
          See the profile
        </Button>
        <Button style={{ color: '#1890ff' }} onClick={() => disconnect(id)}>
          Disconnect
        </Button>
    </Card>
    </li>
  );
}

export default ConnectionItem;
