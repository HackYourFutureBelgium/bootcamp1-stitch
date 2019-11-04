import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }


  render() {
    return (
      <main className="content">
        <section className="introduction">
          <h1>How does it work?</h1>
          <p>someone has to make a body text here, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        <section className="signupSection">
          <h1>Interested?Join us...</h1>
          <button>Sign up</button>
        </section>
        <section className="addLinkSection">
        <h2>Do you have a referral link already?</h2>
        <input type='text'/>
        <button>Search</button>
        </section>
      </main>
    );
  }
}

export default Main;
