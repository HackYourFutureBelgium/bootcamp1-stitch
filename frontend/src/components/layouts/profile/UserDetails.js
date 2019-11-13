import React from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;
const imgStyle= {
  height: '10rem',
  width: '10rem',
  padding: '1rem'

}

const UserDetails =  ({person}) => {
   console.log(person)
    return ( 
        <>
         <Card
    style={{ width: 200 }}
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
      title= {<h4>{person.name.first} {person.name.first}</h4>}
     
    /> 
    <p>About: {person.gender}</p>  
  </Card>,
             
          </>
    );
}

export default UserDetails;