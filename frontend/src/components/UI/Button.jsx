import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Button } from 'antd';

export default class button extends Component {
  render() {
    return (
      <div>
        <Button
          style={{
            color: '#000',
            borderRadius: '3.2rem 0',
            cursor: 'pointer',
            transition: 'all 300ms',
            background: 'pink',
            fontSize: '20px'
          }}
        >
          Primary
        </Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}
