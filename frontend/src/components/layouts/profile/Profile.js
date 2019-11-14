import React, {Component} from 'react';
import UserDetails from "./UserDetails";
import ToLearnList from './ToLearnList';
import ToLearnForm from './ToLearnForm';
import InvitationLinkGenerator from './InvitationLinkGenerator';
import Timeline from './TimeLine';
import {Card, Row, Col } from 'antd';



const styledCard= {
    float:'left'
}
export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            person: 
                {
                gender:"male",
                name:{ 
                   title:"Mr",
                   first:"Matéo",
                   last:"Renaud"
                },
                toLearn:[
                    "java",
                    "python",
                    "php",
                    "perl"
                ],
                id:{ 
                    name:"INSEE",
                    value:"1NNaN39071007 73"
                 },
                 picture:{ 
                    large:"https://randomuser.me/api/portraits/men/57.jpg",
                    medium:"https://randomuser.me/api/portraits/med/men/57.jpg",
                    thumbnail:"https://randomuser.me/api/portraits/thumb/men/57.jpg"
                 },
            } 

            } 
        }
    
         handleOnSubmitTolearn =(skill)=>{
            if (skill)
            this.setState({
                toLearn: this.state.person.toLearn.push(skill)
            })
         }
    render(){
       
        return(
            <>
    
    <Row>
      
      <Col span={12}>  
        <Card style={{width:400}}>
            <UserDetails handleOnSubmitTolearn={this.handleOnSubmitTolearn} person= {this.state.person}/>
            
        </Card>
      </Col>
      <Col span={12}>   
          <Card bordered={false}>
            <Timeline person= {this.state.person}/>
          </Card>
      </Col>
    </Row>
           
    
      
      </>
    );
    }
    
};