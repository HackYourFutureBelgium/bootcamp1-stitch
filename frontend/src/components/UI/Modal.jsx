import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;
class Modal extends React.Component {
  state = {
    loading: true
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    return (
      <div>
        <Card style={{ width: 300, marginTop: 16 }}>
          <Meta
            avatar={<Avatar size={64} src="https://picsum.photos/id/3/500/500" />}
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 16 }}
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
export default Modal;
