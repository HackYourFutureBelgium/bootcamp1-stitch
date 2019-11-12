import React from 'react';

const HowToGetStarted = () => {
  return (
    <section className="app-HowToGetStarted">
      <h1 className="app-HowToGetStarted__title">How To Get Started</h1>
      <ul className="app-HowToGetStarted__list">
        <li className="app-HowToGetStarted__item">
          <img src="curriculum.png" alt="Stitch Logo" title="Stitch" height="85" />
          <p className="app-HowToGetStarted__desc">Fill your <span>timeline</span> based on your skills</p>
        </li>
        <li className="app-HowToGetStarted__item">
          <img src="publicity.png" alt="Stitch Logo" title="Stitch" height="85" />
          <p className="app-HowToGetStarted__desc">Share your <span>profile link</span> to people you like</p>
        </li>
        <li className="app-HowToGetStarted__item">
          <img src="getconnected.png" alt="Stitch Logo" title="Stitch" height="85" />
          <p className="app-HowToGetStarted__desc">Get Connected and <span>get stiched</span></p>
        </li>
      </ul>
    </section>
  );

};


export default HowToGetStarted;
