import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default class CardProf extends Component {
  render() {
    return (
      <div>
        <h1>cart to add</h1>
        <Card
          style={{ width: 400 }}
          cover={<img alt="example" src="https://picsum.photos/id/5/200/200" />}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    );
  }
}
