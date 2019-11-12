import React, { Component } from 'react';
import BioForm from './components/BioForm';

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
          <BioForm />
         </section>
      </main>
    );
  }
}

export default Main;
