import React from 'react'
import Avatar from './Upload'
import { Input } from 'antd';
import { Button } from 'antd';

const {TextArea} = Input;
function BioFormItem() {
        return(
           
           <div>
               <form>
                <Input type='text' placeholder='First Name'/>
                <Input type='text' placeholder='Last Name'/>
                <Input type='email' placeholder='Email'/>
                <Avatar />
                <TextArea rows={4} placeholder='About you'/>
                <Button>Submit</Button>
            </form>
             </div>
        )
    
}
export default BioFormItem;