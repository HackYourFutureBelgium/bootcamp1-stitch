import React from 'react'
import Avatar from './Upload'
import { Input, Card, Button } from 'antd';
import { Redirect } from 'react-router-dom'


const {TextArea} = Input;
class BioFormItem extends React.Component {
    constructor() {
        super();
        this.state = { 
            firstName: '',
            lastName: '',
            email: '',
            status: '',
            about: '',
            redirect: false
        }
        this.handleInputChange= this.handleInputChange.bind(this)
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    setSubmit = () =>{
        this.setState({
            redirect: true
        })
    }
    handleSubmit =() => {
        if (this.state.redirect) {
            return <Redirect to='/persondetail'/>;
          }         
    }
    render() {
        return( 
           <div>
                   <Card style={{ width: 600, border: 'none'}}>
               <form style={{fontSize:'16px'}}>
                <Input 
                style= {{margin:'10px 0px'}}
                type='text' 
                name='firstName'
                value={this.state.firstName} 
                placeholder='First Name' 
                onChange={this.handleInputChange}
                />
                <br />
                <Input 
                style= {{margin:'10px 0px'}}
                type='text'
                name='lastName' 
                value={this.state.lastName} 
                placeholder='Last Name' 
                onChange={this.handleInputChange}
                />
                <br />

                <Input 
                style= {{margin:'10px 0px'}}
                type='email' 
                name='email' 
                value={this.state.email} 
                placeholder='Email' 
                onChange={this.handleInputChange}
                />
                <br />

                
                <Avatar style= {{margin:'10px 0px'}}/>
                <br />

                <Input 
                style= {{margin:'10px 0px'}}
                type='text' 
                name='status' 
                value={this.state.status} 
                placeholder='Status' 
                onChange={this.handleInputChange}
                />
                <br />

                <TextArea rows={4} 
                style= {{margin:'10px 0px'}}
                name='about' 
                value={this.state.about} 
                placeholder='About you' 
                onChange={this.handleInputChange}
                />
                <br />
                {this.handleSubmit()}
                <Button onClick={this.setSubmit} type='primary'>Submit</Button>
            </form>
            </Card>
             </div>
        )
        }
}
export default BioFormItem;