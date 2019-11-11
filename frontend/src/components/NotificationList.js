import React, { Component } from 'react';
import ConnectionRequestItem from './ConnectionRequestItem';
import StitchRequestItem from './StitchRequestItem'

class NotificationList extends Component {
  constructor() {
    super();
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
  }

  componentDidMount(){

  }
  componentDidUpdate() {

  }

  declineNotification(id) {
    this.setState(prevState => {
      var notifications = prevState.notifications.findIndex(user => {
        if(user.id ===id) {
         return user = prevState.notifications.splice(notifications,1)
        }
        return user;
      })

      return {
      notifications : notifications
      };
    })
  }


  render() {
    
    const notificationsItems = this.state.notifications.map(user => {
      return<ConnectionRequestItem key={user.id} decline={this.declineNotification} notification= {user} />;
    });
  
    const stitchNotificationItems = this.state.stitchNotifications.map(user => {
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