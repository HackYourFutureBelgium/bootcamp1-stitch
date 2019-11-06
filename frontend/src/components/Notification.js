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
      <div>
        <h1>Notifications</h1>
        <NotificationList />
      </div>
    )

}
}
export default Notification;
