import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer text-light ">
      <h1 className="text-center footerH">
        All Right Reserved &copy; CraftKrit
      </h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
