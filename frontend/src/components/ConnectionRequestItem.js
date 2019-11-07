import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';


function ConnectionRequestItem({ notification }) { 
  const { name, role } = notification;
    return (
      <li>
       <img src="./images/simplephoto.jpeg" width="50px" height="40px" alt="photoofconnect" />
       <h2>You have a connection request from {name}</h2>
       <h3>{role}</h3>
       <Button>accept</Button>
       <Button>decline</Button>
      </li>
    );
};

export default ConnectionRequestItem;