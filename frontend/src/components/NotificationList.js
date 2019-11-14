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
    this.declineNotification = this.declineNotification.bind(this);
    this.declineStitchNotification = this.declineStitchNotification.bind(this);
    this.acceptNotification = this.acceptNotification.bind(this);
    this.acceptStitchNotification = this.acceptStitchNotification.bind(this);


  }

  acceptNotification(id) {
    this.setState(prevState => {
      const notifications = prevState.notifications.filter(user => (user.id !== id));
      return {
      notifications : notifications
      };
    })
  }
  acceptStitchNotification(id) {
    this.setState(prevState => {
      const stitchNotifications = prevState.stitchNotifications.filter(user => (user.id !== id));
      return {
        stitchNotifications : stitchNotifications
      };
    })
  }

 declineNotification(id) {
    this.setState(prevState => {
      const notifications = prevState.notifications.filter(user => (user.id !== id));
      return {
      notifications : notifications
      };
    })
  }
  declineStitchNotification(id) {
    this.setState(prevState => {
      const stitchNotifications = prevState.stitchNotifications.filter(user => (user.id !== id));
      return {
        stitchNotifications : stitchNotifications
      };
    })
  }
  render() {

    const notificationsItems = this.state.notifications.map(user => {
      return<ConnectionRequestItem key={user.id} accept={this.acceptNotification} decline={this.declineNotification} notification= {user} />;
    });

    const stitchNotificationItems = this.state.stitchNotifications.map(user => {
      return<StitchRequestItem key ={user.id} accept={this.acceptStitchNotification} decline={this.declineStitchNotification} stitchNotification={user} />
    })
    return (
      <ul className='notification-ul'>
      <li className='notification-il' style={{listStyleType:'none'}}>{notificationsItems}</li>
      <li className='notification-il' style={{listStyleType:'none'}}>{stitchNotificationItems}</li>
      </ul>
    )
}
}
export default NotificationList;
