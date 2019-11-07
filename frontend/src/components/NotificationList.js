import React, { Component } from 'react';
import ConnectionRequestItem from './ConnectionRequestItem';
import StitchRequestItem from './StitchRequestItem'

class NotificationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          name: 'nihan',
          role: 'Web Developer',
          id: 'nihan'
        },
        {
          name: 'manju',
          role: 'web developer',
          id: 'manju',
        },
        {
          name: 'abdul',
          role: 'software developer',
          id: 'abdul'
        }
      ],
      stitchNotifications: [
        {
          name: 'John',
          role: 'web developer',
          stitch: 'he is wonderful.',
          id: 'john'
        }
      ]
      
    };
  }

  componentDidMount(){

  }
  render() {
    const { notifications } = this.state;
    const notificationsItems = notifications.map(user => {
      return<ConnectionRequestItem key={user.id} notification= {user} />;
    });
    const {stitchNotifications} = this.state;
    const stitchNotificationItems = stitchNotifications.map(user => {
      return<StitchRequestItem key ={user.id} stitchNotification={user} />
    })
    return (
      <ul>
      <li>{notificationsItems}</li>
      <li>{stitchNotificationItems}</li>
      </ul>
    )
}
}
export default NotificationList;