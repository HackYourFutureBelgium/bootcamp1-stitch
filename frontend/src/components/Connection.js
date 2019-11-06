import React, { Component } from 'react';
import ConnectionList from './ConnectionList';

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Connections</h1>
        <ConnectionList />
      </div>
    )

}
}
export default Connection;
