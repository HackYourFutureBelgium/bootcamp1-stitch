import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CardProf from './UI/CardProf';

import 'bootstrap/dist/css/bootstrap.min.css';

class PersonDetail extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <h1>Profile Details page </h1>

        <CardProf />
        <Footer />
      </div>
    );
  }
}

export default PersonDetail;
