import React , {Component} from 'react'
import styles from '../../../styles/styles.css'
import {Input, Row, Col, Button} from 'antd';

const TodoComponent = {
    width: "300px",
    margin: "30px auto",
  }



export default class InvitationLinkGenerator extends Component{
     constructor(props){
         super(props)
     }

     render(){
        
          return(
              <>
              <Row style={{ width: 400 }}>
              <Col>
              <Input placeholder= "Generate an URL"></Input>
              
              </Col>
              
              <Button>Generate</Button>

              
              </Row>
        
         </>
        )
     }
    
    }