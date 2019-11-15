import React from 'react';

import { Card } from 'antd';

export default (props) => {
  const toLearn = props.toLearn.map((skill) => <a href="#"> #{skill}</a>);
  return (
    <>
      <Card>
        <h6 class="profile-card__learnings">Topics I Want To Learn</h6>
        <p>{toLearn} </p>
      </Card>
    </>
  );
};
