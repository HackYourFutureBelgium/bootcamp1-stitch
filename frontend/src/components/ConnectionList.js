import React, { Component } from 'react';
import ConnectionItem from './ConnectionItem';

class ConnectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <ConnectionItem />
        <ConnectionItem />
        <ConnectionItem />
      </div>
    )

}
}
export default ConnectionList;