import React, { useState } from 'react';
import { Card, Icon, Avatar } from 'antd';
import ToLearnList from './ToLearnList';
import ToLearnForm from './ToLearnForm';
import InvitationLinkGenerator from './InvitationLinkGenerator';

const { Meta } = Card;

const imgStyle = {
  height: '10rem',
  width: '10rem',
  padding: '1rem'
};

const UserDetails = ({ handleOnSubmitTolearn }) => {
  const person = {
    name: {
      title: 'Mr',
      first: 'Matéo',
      last: 'Renaud'
    },
    toLearn: ['java', 'python', 'php', 'perl'],
    id: {
      name: 'INSEE',
      value: '1NNaN39071007 73'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/57.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/57.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/57.jpg'
    }
  };

  const [skillsToLearn, setSkillsToLearn] = useState(person.toLearn);

  const addSkillToLearn = (newSkill) => {
    setSkillsToLearn([...skillsToLearn, newSkill]);
  };

  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={<img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        // actions={[
        //   <Icon type="setting" key="setting" />,
        //   <Icon type="edit" key="edit" />,
        //   <Icon type="ellipsis" key="ellipsis" />,
        // ]}
      >
        <Meta
          // avatar={<Avatar src={person.picture.thumbnail} />}
          title={
            <h5 className="profile-card__name">
              {person.name.first} {person.name.last}
            </h5>
          }
        />
        <ToLearnList toLearn={skillsToLearn} />
        <ToLearnForm handleOnSubmit={addSkillToLearn} />
        <InvitationLinkGenerator />
      </Card>
      ,
    </>
  );
};

export default UserDetails;
