import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Timeline, Icon } from 'antd';
import Comments from './UI/Comments';
import Modal from './UI/Modal';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />

        <container>
          ipsum dolor sit amet consectetur adipisicing elit. Inventore similique obcaecati facilis
          perferendis? Neque, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis harum velit ab quod ratione? Dolorem facilis accusantium id exercitationem
          hic, ab voluptates maiores voluptatum tempore. Architecto quo placeat aperiam laboriosam
          suscipit harum distinctio voluptate aliquam quam illo fuga molestias doloribus ipsam,
          recusandae ullam magni cupiditate corporis corrupti delectus exercitationem odit?
        </container>
        <Timeline mode="alternate">
          <Timeline.Item>
            lorem15 Create a services site 2015-09-01{<Modal />}
            {<Comments />}
          </Timeline.Item>

          <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color="orange">Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Technical testing 2015-09-01 {<Modal />}
          </Timeline.Item>
          <Timeline.Item color="yellow">
            Create a services site 2015-09-01 {<Modal />}
          </Timeline.Item>
          <Timeline.Item color="green">
            Solve initial network problems 2015-09-01 {<Modal />}
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
            {<Modal />}
          </Timeline.Item>
        </Timeline>

        <Footer />
      </div>
    );
  }
}
