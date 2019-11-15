import React from 'react';

import { Card } from 'antd';

export default (props) => {
  console.log(props);
  const toLearn = props.toLearn.map((skill) => <a href="#"> # {skill}</a>);
  return (
    <>
      <Card style={{ margin: 10 }}>
        <h6>Topics I want to learn</h6>
        <p>{toLearn} </p>
      </Card>
    </>
  );
};
