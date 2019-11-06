import React, { Component } from 'react';
import Introduction from './Introduction';
import SignUpSection from './SignUpSection';

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
        <Introduction />
        <SignUpSection />
      </main>
    );
  }
}

export default Main;
