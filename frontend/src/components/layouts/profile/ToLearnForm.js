import React , {Component} from 'react'
import styles from '../../../styles/styles.css'
import {Input, Card, Button, Row, Col} from 'antd';

const {Search} = Input;

export default class ToLearnForm extends Component{
     constructor(props){
         super(props)
     }
handleOnClick=(e) => {
 

  console.log(e);
  this.props.handleOnSubmit(e)
  

}
     render(){
        
          return(
            <div>
            
            
          
            <Search
              placeholder="input search text"
              enterButton="Add"
              size="large"
              onSearch={this.handleOnClick}
            />
          </div>
             
        )
     }
    
    }
