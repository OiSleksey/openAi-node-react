import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-cont">
        <h5 className="footer-cont__description">
          This project implements chat between ChatGPT and the user. Do you have
          questions or suggestions?
        </h5>
        <h5 className="footer-cont__about">
          Write to the e-mail address of
          <a href="#"> Kryvonogy Oleksiy</a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
