import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const NotFound = () => (
  <div>
    <Header />
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
    <Footer />
  </div>
);

export default NotFound;
