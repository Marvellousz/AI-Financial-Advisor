import React from "react";
import Instagram from "../assets/Instagram.svg";
import Linkedin from "../assets/Linkedin.svg";
import Vector from "../assets/Vector.svg";
import Twitter from "../assets/Twitter.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.png";
import Phone from "../assets/Phone.svg";
import logo from "../assets/logo.svg";
import s from "../assets/s.svg";
import m from "../assets/m.svg";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contactus"
      className="flex justify-between border-t border-primary"
    >
      <div className="flex flex-col items-start mt-5 ml-5 text-white-footer">
        <a href="#">
          <img src={logo} alt="Moon Finance Logo" />
        </a>
        <p className="mb-2">
         <img src={s} className="h-5 w-5" alt="Phone" />&nbsp; +911234567890
        </p>

        <p>
          <img src={m} className="h-5 w-5" alt="Email" />&nbsp; sunfinance@gmail.com
        </p>

      </div>
      <div className="mt-5 ml-5 text-weight-light text-lg-left text-white-footer">
        <p>The Suggested ratios are for research purposes only.</p>
        <p>Lorem ipsum dolor sit</p>
        <p>tincidunt rutrum mollis ornare</p>
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
        <a href="https://www.linkedin.com/company/moon-finance-s/">
          <img src={Linkedin} alt="LinkedIn" className="h-5 w-5" />
        </a>
        <a href="https://www.instagram.com/moonfintech?igsh=MW9hY2tyaHR1amppMA==">
          <img src={Instagram} alt="Instagram" className="h-5 w-5" />
          {/* <FaInstagram /> */}
        </a>
        {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
        <a href="https://www.twitter.com">
          <img src={Twitter} alt="Twitter" className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
