import React, { Component } from 'react';
import { Avatar } from 'antd';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <main className="content">
        <section className="introduction">
          <h1>How does it work?</h1>
          <Avatar size={154} shape="square">
            {' '}
            <img
              src="https://picsum.photos/id/5/400/400"
              alt="Smiley face"
              width="130"
              height="130"
            ></img>
          </Avatar>
          <p>
            someone has to make a body text here, Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section className="signupSection">
          <h1>How does it work?</h1>
          <p>
            someone has to make a body text here, Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
      </main>
    );
  }
}

export default Main;
