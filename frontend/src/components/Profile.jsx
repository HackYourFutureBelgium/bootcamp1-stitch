import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '../UI/Button';
import CustomizedRatings from '../UI/Reiting';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Profile page </h1>
        <CustomizedRatings />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default Profile;
