import React , {Component} from 'react'
import styles from '../../../styles/styles.css'
import {Input, Card, Button, Row, Col, Form} from 'antd';

const {Search} = Input;

export default class ToLearnForm extends Component{
     constructor(props){
         super(props)
     }
handleOnClick=(e) => {
   
  const skill= new FormData(e.target);

  console.log(skill.get('skill'));
  e.preventDefault()
  this.props.handleOnSubmit(skill.get('skill'))
  

}
       handleOnEdit=()=>{
            
       }
     render(){
        
          return(
            <form onSubmit={this.handleOnClick}>
            <input id="skill" type="text" name="skill" />
            <br/>
            <input type="submit" value="Submit"/> 
            <button onClick={this.onEdit}>Edit</button>

            </form>
          
          
           
          
             
        )
     }
    
    }
