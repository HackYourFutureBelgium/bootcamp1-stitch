import React from 'react';
import 'antd/dist/antd.css';
import { Button, Card } from 'antd';


function ConnectionRequestItem({notification, decline, accept}) { 
  const { name, role, id } = notification;
    return (
      <Card style={{ width: 600, border:'none'}}>
      <div>
       <img src="./images/simplephoto.jpeg" width="100px" height="70px" alt="photoofconnect" />
       <h2 style={{textTransform:'capitalize', margin: '10px 0px'}}>Connection request from {name}</h2>
       <h3 style={{textTransform:'capitalize', margin: '10px 0px'}}>{role}</h3>
       <Button onClick={() => accept(id)}>accept</Button>
       <Button onClick={() => decline(id)}>decline</Button>
      </div>
      </Card>
    );
};

export default ConnectionRequestItem;