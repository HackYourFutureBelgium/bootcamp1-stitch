import React, { Component } from 'react';
import { Input } from 'antd';

class ProfileFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
    };
  }
  handleChange = (e) => {
   this.setState({value: e.currentTarget.value});
  }
  handleSearch = () => {
    window.open(this.state.value);
    this.setState({value:''});
  }
  render(){
    const { Search } = Input;
    return (
      <section className="app-profileFinder">
        <h1 className="app-profileFinder__title">Find a Stitcher profile</h1>
        <p>If you have a Stitcher referrential link already, you can paste it here</p>
        <Search
        placeholder="input the referrential link here"
        value={this.state.value}
        onChange={this.handleChange}
        icon="search"
        enterButton="Find"
        size="large"
        onSearch={this.handleSearch}
      />
      </section>
    );
  }

};


export default ProfileFinder;
