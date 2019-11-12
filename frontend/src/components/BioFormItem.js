import React from 'react'
import Avatar from './Upload'
import { Input } from 'antd';
import { Button } from 'antd';

const {TextArea} = Input;
class BioFormItem extends React.Component {
    constructor() {
        super();
        this.state = { 
            firstName: '',
            lastName: '',
            email: '',
            status: '',
            about: ''
        }
        this.handleInputChange= this.handleInputChange.bind(this)
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    
    handleSubmit =(event) => {
        event.preventDefault();
    }
    render() {
        return( 
           <div>
               <form>
                <Input 
                type='text' 
                name='firstName'
                value={this.state.firstName} 
                placeholder='First Name' 
                onChange={this.handleInputChange}
                />
                <br />
                <Input 
                type='text'
                name='lastName' 
                value={this.state.lastName} 
                placeholder='Last Name' 
                onChange={this.handleInputChange}
                />
                <br />

                <Input 
                type='email' 
                name='email' 
                value={this.state.email} 
                placeholder='Email' 
                onChange={this.handleInputChange}
                />
                <br />

                <Avatar />
                <br />

                <Input 
                type='text' 
                name='status' 
                value={this.state.status} 
                placeholder='Status' 
                onChange={this.handleInputChange}
                />
                <br />

                <TextArea rows={4} 
                name='about' 
                value={this.state.about} 
                placeholder='About you' 
                onChange={this.handleInputChange}
                />
                <br />

                <Button onClick={this.handleSubmit}>Submit</Button>
            </form>
             </div>
        )
        }
}
export default BioFormItem;