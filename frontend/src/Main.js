import React, { Component } from 'react';
import Notification from './components/Notification'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }


  render() {
    return (
      <main className="content">
        <section>
        <Notification />
        </section>
        </main>
    );
  }
}

export default Main;
