import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const NotFound = () => (
  <div>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link id="link404" to="/">
            Back Home
          </Link>
        </Button>
      }
    />
  </div>
);

export default NotFound;
