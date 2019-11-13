import React, { Component } from 'react';
import NotificationList from './NotificationList';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <section className='notification'>
        <h1 className='notification-title'>Notifications</h1>
        <NotificationList />
      </section>
    )

}
}
export default Notification;
