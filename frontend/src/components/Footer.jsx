import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="app-footer" style={{ display: 'flex', justifyContent: 'start' }}>
      <h1 className="app-footer__title">Hack Your Future 2019</h1>

      <div id="social">
        <a
          class="facebookBtn smGlobalBtn"
          href="https://www.facebook.com/HackYFutureBE/"
          target="-blanck"
        >
          .
        </a>
        <a class="twitterBtn smGlobalBtn" href="https://twitter.com" target="-blanck">
          .
        </a>
        <a class="googleplusBtn smGlobalBtn" href="https://www.google.com/" target="-blanck">
          .
        </a>
        <a class="linkedinBtn smGlobalBtn" href="https://www.linkedin.com" target="-blanck">
          .
        </a>
        <a class="pinterestBtn smGlobalBtn" href="https://www.pinterest.com/" target="-blanck">
          .
        </a>
      </div>
    </footer>
  );
};

export default Footer;
