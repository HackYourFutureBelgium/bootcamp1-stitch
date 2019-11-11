import React from 'react';
import { PageHeader, Menu } from 'antd';

export default function Header(props) {
  return (
    <React.Fragment>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
          background: '#9ef',
          width: '100vw',
          display: 'flex',
          alignitems: 'center',
          padding: '0 5rem',
          boxShadow: '0 0 3px 1px rgba(81, 81, 81, 0.2)',
          top: '0px',
          left: '0',
          height: '50px'
        }}
        title="STITCH"
      ></PageHeader>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          {' '}
          <a href="http://localhost:3000/profile">profile</a>
        </Menu.Item>
        <Menu.Item key="2">
          {' '}
          <a href="http://localhost:3000/login">login</a>
        </Menu.Item>
        <Menu.Item key="3">
          {' '}
          <a href="http://localhost:3000/">main</a>
        </Menu.Item>
        <Menu.Item key="4">
          {' '}
          <a href="http://localhost:3000/persondetail">persondetail</a>
        </Menu.Item>
        <Menu.Item key="5">
          {' '}
          <a href="http://localhost:3000/logout">logout</a>
        </Menu.Item>
        <Menu.Item key="6">
          {' '}
          <a href="http://localhost:3000/signup">sign up</a>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}
