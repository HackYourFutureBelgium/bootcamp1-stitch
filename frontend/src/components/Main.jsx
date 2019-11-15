import React, { Component } from 'react';
import Introduction from './Introduction';
import HowToGetStarted from './HowToGetStarted';
import ProfileFinder from './ProfileFinder';

class Main extends Component {
  render() {
    return (
      <main className="content">
        <Introduction />
        <HowToGetStarted />
        <ProfileFinder />
      </main>
    );
  }
}

export default Main;
