import React, { Component } from 'react';
import BioFormList from './BioFormList';

class BioForm extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1 style={{color:'#002766', textTransform:'capitalize', margin: '20px 20px'}}>Welcome to Stitch!</h1>
        <h2 style={{color:'#002766', textTransform:'capitalize', margin: '10px 20px'}}>Now you can begin to set your profile</h2>
        <BioFormList />
      </div>
    )

}
}
export default BioForm;