import React, { useState } from "react";

import Footer from "../../components/Layout/Footer";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";

import "react-toastify/dist/ReactToastify.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  // const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  // const toast = useToast();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
        // toast({
        //   title: res.data.message,
        //   Status: "error",
        //   duration: 6000, // Visible for 6 seconds
        //   isClosable: true,
        // });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      // toast({
      //   title: "Something went wrong",
      //   Status: "error",
      //   duration: 6000, // Visible for 6 seconds
      //   isClosable: true,
      // });
    }
  };
  return (
    <Layout title={"Forgot Password - CraftKrit"}>
      <div className="registerBody">
        <div className="form-container register" style={{ minHeight: "90vh" }}>
          <form className="regForm" onSubmit={handleSubmit}>
            <h4 className="title">RESET PASSWORD</h4>

            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputAnswer1"
                placeholder="Enter Your Favorite Sport Name "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                id="exampleInputNewPassword1"
                placeholder="Enter New Password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary regButton">
              RESET
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default ForgotPassword;
