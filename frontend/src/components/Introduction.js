import React from 'react';
import SignUpSection from './SignUpSection';

const Introduction = () => {
  return (
    <section className="introduction">
      <img
        className="introduction-img"
        src="stitching.png"
        alt="Stitching your future"
        title="Stich your experience"
      />
      <div className="introduction-text">
        <h1>The companion for your life-long learning journey</h1>
        <p>
          How often does the world recognize an individual by their formal degree? And what happens
          with your the rest of your (informal) learning journey - such as attending informal
          events, writing an article, and so on? Wouldn't it be great if you can show off the both
          worlds of recognition all in one place? Stitch can help you do that.
        </p>
        <SignUpSection />
      </div>
    </section>
  );
};

export default Introduction;
