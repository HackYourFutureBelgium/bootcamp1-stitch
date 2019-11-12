import { Timeline, Icon, Avatar, Card } from 'antd';
import React from 'react';


const { Meta } = Card;

export default  (props) =>{
    return(
    
      
  <Timeline mode="alternate">
  <Timeline.Item dot={<Icon type="github" style={{ fontSize: '16px' }} />}>
  <Card
    style={{ width: 300 }}
    actions={[
      
      <Icon type="edit" key="edit" />,
     
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
   </Timeline.Item>
  <Timeline.Item dot={<Icon type="twitter" style={{ fontSize: '16px' }} />}><a href="">just a link</a></Timeline.Item>
  <Timeline.Item dot={<Icon type="github" style={{ fontSize: '16px' }} />}>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo.
  </Timeline.Item>
  <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
  <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
    Technical testing 2015-09-01
  </Timeline.Item>
</Timeline>

    )
}
