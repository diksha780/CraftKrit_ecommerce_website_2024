import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiPhoneCall, BiSupport } from "react-icons/bi";
import Footer from "../components/Layout/Footer";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactUs.webp"
            alt="contactus"
            style={{ width: "520px", marginLeft: "40px", marginTop: "10px" }}
          />
        </div>
        <div className="col-md-6 contactMe">
          <h1 className=" p-2 text-white text-center contactHeading">
            CONTACT US
          </h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call us anytime 24X7
            avialable
          </p>
          {/* <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p> */}
          <p className="mt-3">
            <BiPhoneCall /> : 1234567890
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contact;
