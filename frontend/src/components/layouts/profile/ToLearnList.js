import React from 'react';

import { Card } from 'antd';


export default (props) => {
    console.log(props)
    const toLearn = props.toLearn.map(skill => <a href="#"> # {skill}</a> );
     return(
         <>
        <div>
    <Card title="Topics I Want To Learn" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>{toLearn} </p>
    </Card>
   
  </div>
        </>
     )  
    }