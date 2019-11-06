import React, { Component } from 'react';
import Introduction from './Introduction';
import SignUpSection from './SignUpSection';
import ProfileFinder from './ProfileFinder';

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
        <ProfileFinder />
      </main>
    );
  }
}

export default Main;
