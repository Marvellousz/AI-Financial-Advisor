import React from 'react';
import insta from '../assets/insta.svg';
import Vector from '../assets/Vector.svg';
import x from '../assets/x.svg';
import mail from '../assets/mail.svg';
import phone from '../assets/phone.png';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer id="contactus" className="flex justify-between border-t border-primary">
      <div className="flex flex-col items-start mt-5 ml-5 text-white-footer">
        <a href="#"><img src={logo} alt="Moon Finance Logo" /></a>
        <p className="mb-2"><img src={phone} className="h-4 w-4" alt="Phone" />+911234567890</p>
        <p><img src={mail} className="h-4 w-4" alt="Email" />sunfinance@gmail.com</p>
      </div>
      <div className="mt-5 ml-5 text-weight-light text-lg-left text-white-footer">
        <p>The Suggested ratios are for research purposes only.</p>
        <p>KOINAI TECH PVT.LTD</p>
        <p>CIN: U66309GJ2024PTC147792</p>
      </div>
      <div className="mt-4 ml-4 mr-4 text-white-footer">
        <ul className="list-none">
          <li>Home</li>
          <li>Services</li>
          <li>Attribution</li>
          <li>About</li>
        </ul>
      </div>
      <div className="flex flex-col mt-4 text-white-footer">
        <a href="https://www.linkedin.com/company/moon-finance-s/"><img src={Vector} alt="LinkedIn" className="h-5 w-5" /></a>
        <a href="https://www.instagram.com/moonfintech?igsh=MW9hY2tyaHR1amppMA=="><img src={insta} alt="Instagram" className="h-5 w-5" /></a>
        <a href="https://www.twitter.com"><img src={x} alt="Twitter" className="h-5 w-5" /></a>
      </div>
    </footer>
  );
};

export default Footer;
