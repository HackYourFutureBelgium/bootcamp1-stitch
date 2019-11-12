import React, { Component } from 'react';
import BioFormItem from './BioFormItem';

class BioFromList extends Component {
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
export default BioFromList;
 