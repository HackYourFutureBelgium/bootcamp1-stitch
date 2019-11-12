import React, { Component } from 'react';
import BioFormList from './BioFromList';

class BioForm extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Welcome to Stitch!</h1>
        <h2>Now you can begin to set your profile</h2>
        <BioFormList />
      </div>
    )

}
}
export default BioForm;