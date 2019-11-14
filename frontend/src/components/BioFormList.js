import React, { Component } from 'react';
import BioFormItem from './BioFormItem';

class BioFormList extends Component {
  constructor() {
    super();
    this.state = {}
  }
    render() {
        return(
           <div>
                {<BioFormItem />}
                </div>
        )
    }
}
export default BioFormList;