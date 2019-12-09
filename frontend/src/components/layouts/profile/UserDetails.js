import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import ToLearnList from './ToLearnList';
import ToLearnForm from './ToLearnForm';
import InvitationLinkGenerator from './InvitationLinkGenerator';
const { Meta } = Card;
const imgStyle= {
  height: '10rem',
  width: '10rem',
  padding: '1rem'

}

const UserDetails =  ({person, handleOnSubmitTolearn, editing}) => {
   console.log(person)
   console.log(handleOnSubmitTolearn)
    return ( 
     
        <>
         <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={person.picture.thumbnail}
        style={imgStyle}
      />
    }
    // actions={[
    //   <Icon type="setting" key="setting" />,
    //   <Icon type="edit" key="edit" />,
    //   <Icon type="ellipsis" key="ellipsis" />,
    // ]}
  >
    <Meta
      // avatar={<Avatar src={person.picture.thumbnail} />}
      title= {<h5>{person.name.first} {person.name.first}</h5>}
     
    />      
            <ToLearnList person={person} editing={editing} toLearn= {person.toLearn}/>
            <ToLearnForm handleOnSubmit={handleOnSubmitTolearn}/>
            <InvitationLinkGenerator/> 
  </Card>,
             
          </>
    );
}

export default UserDetails;