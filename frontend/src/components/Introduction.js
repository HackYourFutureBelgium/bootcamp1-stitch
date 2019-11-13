import React from 'react';
import SignUpSection from './SignUpSection';

const Introduction = () => {
  return (
    <section className="introduction">
      <img className="introduction-img" src="stitching.png" alt="Stitching your future" title="Stich your experience" />
      <div className="introduction-text">
        <h1>Your companion for your learning journey</h1>
        <p>How often the world recognizing an individual by her/his formal degree? And what happens with your informal learning journey like attending informal events, writing an article, and so on? Isn't that great if you can show off the worlds both recognitions all in one place? Stitch can help you with that.</p>
        <SignUpSection />
      </div>
    </section>
  );

};


export default Introduction;
