import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';



  function StitchRequestItem({stitchNotification, decline, accept}) { 
    const { name, role, stitch, id } = stitchNotification;
    return (
      <ul>
       <img src="./images/simplephoto.jpeg" width="50px" height="40px" alt="photoofconnect"/>
       <h2>Stitch request from {name}</h2>
       <h3>{role}</h3>
       <h3>{stitch}</h3>
       <Button onClick={() => accept(id)}>accept</Button>
       <Button onClick={() => decline(id)}>decline</Button>
      </ul>
    );
};

export default StitchRequestItem;