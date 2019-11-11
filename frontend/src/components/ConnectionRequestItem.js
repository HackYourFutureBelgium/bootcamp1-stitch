import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';


function ConnectionRequestItem({notification, decline, accept}) { 
  const { name, role, id } = notification;
    return (
      <div>
       <img src="./images/simplephoto.jpeg" width="50px" height="40px" alt="photoofconnect" />
       <h2>You have a connection request from {name}</h2>
       <h3>{role}</h3>
       <Button onClick={() => accept(id)}>accept</Button>
       <Button onClick={() => decline(id)}>decline</Button>
      </div>
    );
};

export default ConnectionRequestItem;