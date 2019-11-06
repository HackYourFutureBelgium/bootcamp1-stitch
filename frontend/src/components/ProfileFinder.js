import React from 'react';
import { Input } from 'antd';



const ProfileFinder = () => {
  const { Search } = Input;
  return (
    <section className="app-footer">
      <h1 className="app-footer__title">Find a Stitcher you know</h1>
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
