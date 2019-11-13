import React from 'react';
import {Icon} from 'antd';

const Footer = () => {
  return (
    <footer className="app-footer">
      <h1 className="app-footer__title">© Hack Your Future 2019</h1>
      <ul className="app-footer__socialmedia">
        <li className="app-footer__socialmedia-item">
          <a href="https://twitter.com/HackYFutureBE"><Icon type="twitter" style={{ fontSize: '16px'}} /></a>
        </li>
        <li className="app-footer__socialmedia-item">
          <a href="https://www.facebook.com/HackYFutureBE"><Icon type="facebook" theme="filled" style={{ fontSize: '16px'}} /></a>
        </li>
        <li className="app-footer__socialmedia-item">
          <a href="https://www.linkedin.com/company/hackyourfuture-belgium/"><Icon type="linkedin" theme="filled" style={{ fontSize: '16px'}} /></a>
        </li>
      </ul>

    </footer>
  );

};


export default Footer;
