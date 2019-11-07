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

  componentDidMount() {
    /* TODO
      request connections from API and set them to state
      instead of dummy data */
  }

  removeConnection = id => {
    /* TODO
      disconnect on the server-side before we
      remove the connection from state */
    const connections = [...this.state.connections];
    const index = connections.findIndex(user => {
      return user.id === id;
    });
    connections.splice(index, 1);
    this.setState({ connections: connections });
  };

  render() {
    const { connections } = this.state;
    const connectionItems = connections.map(user => {
      return <ConnectionItem key={user.id} disconnect={this.removeConnection} connection={user} />;
    });

    return <ul>{connectionItems}</ul>;
  }
}
export default ConnectionList;
