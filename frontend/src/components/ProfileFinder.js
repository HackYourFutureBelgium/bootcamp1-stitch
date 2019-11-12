import React from 'react';
import { Input } from 'antd';



const ProfileFinder = () => {
  const { Search } = Input;
  return (
    <section className="app-profileFinder">
      <h1 className="app-profileFinder__title">Find a Stitcher profile</h1>
      <p>If you have a Stitcher referrential link already, you can paste it here</p>
      <Search
      placeholder="input the referrential link here"
      icon="search"
      enterButton="Find"
      size="large"
      onSearch={value => console.log(value)}
    />
    </section>
  );

};


export default ProfileFinder;
