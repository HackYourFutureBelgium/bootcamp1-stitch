import React, { Component } from 'react';
import ConnectionRequestItem from './ConnectionRequestItem';
import StitchRequestItem from './StitchRequestItem'

class NotificationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <ConnectionRequestItem />
        <ConnectionRequestItem />
        <StitchRequestItem />        
      </div>
    )

}
}
export default NotificationList;