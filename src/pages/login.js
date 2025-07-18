import React from "react";
import LoginComponent from "../components/login/login";
import TopNav from "../components/top-nav";
import Footer from "../components/footer";

const Login = () => {
  return (
    <div>
      <TopNav />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
