import React, { useState } from "react";

import Footer from "../../components/Layout/Footer";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  // const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  // const toast = useToast();

  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
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
    <Layout title="Register - CraftKrit">
      <div className="registerBody">
        <div className="form-container register" style={{ minHeight: "90vh" }}>
          <form className="regForm" onSubmit={handleSubmit}>
            <h4 className="title">LOGIN FORM</h4>

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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="mb-3">
              <button
                type="button"
                className="btn  btn-primary regButton"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="btn btn-primary regButton">
              LOGIN
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Login;
