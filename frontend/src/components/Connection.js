import React, { Component } from 'react';
import ConnectionList from './ConnectionList';

class Connection extends Component {
  render() {
    return (
      <section className="connection">
        <h1 className="connection-title">Connections</h1>
        <ConnectionList />
      </section>
    )

}
}
export default Connection;
