import React from 'react';
import { PageHeader, Menu } from 'antd';

export default function Header(props) {
  return (
    <React.Fragment>
      <Menu
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
          <a href="http://localhost:3000/">main</a>
        </Menu.Item>
        <Menu.Item key="3">
          {' '}
          <a href="http://localhost:3000/persondetail">persondetail</a>
        </Menu.Item>
        <Menu.Item key="4">
          {' '}
          <a href="http://localhost:3000/connections">connections</a>
        </Menu.Item>
        <Menu.Item key="5">
          {' '}
          <a href="http://localhost:3000/notification">notifications</a>
        </Menu.Item>
        <Menu.Item key="6">
          {' '}
          <a href="http://localhost:3000/signup">sign up</a>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}
