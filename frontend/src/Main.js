import React, { Component } from 'react';
import Connection from './components/Connection'

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
          <Connection />
         </section>
      </main>
    );
  }
}

export default Main;
