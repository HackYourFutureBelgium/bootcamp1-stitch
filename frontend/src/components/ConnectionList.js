import React, { Component } from 'react';
import ConnectionItem from './ConnectionItem';

class ConnectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: [
        {
          name: 'Tamar',
          role: 'Web Developer',
          id: 'tamar'
        },
        {
          name: 'Michiel',
          role: 'Full-Stack Web Developer',
          id: 'michiel'
        },
        {
          name: 'Alfi',
          role: 'Professional baker that also develops',
          id: 'alfi'
        }
      ]
    };
  }
  render() {
    const { connections } = this.state;
    const connectionItems = connections.map(user => {
      return <ConnectionItem key={user.id} connection={user} />;
    });

    return <ul>{connectionItems}</ul>;
  }
}
export default ConnectionList;
