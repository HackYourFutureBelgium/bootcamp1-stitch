import React , {Component} from 'react'
import styles from '../../../styles/styles.css'
import {Input, Card, Button, Row, Col} from 'antd';

const {Search} = Input;

export default class ToLearnForm extends Component{
     constructor(props){
         super(props)
     }

     render(){
        
          return(
              <>
              <Row style={{ width: 400 }}>
              <Col>
              <Input placeholder= "Add a Skill"></Input>
              
              </Col>
              <Col>
              <Button type="primary">Add</Button>
              </Col>
              
              </Row>
        
         </>
        )
     }
    
    }