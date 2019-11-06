import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Button } from 'antd';

export default class button extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}
