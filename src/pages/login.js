import React from "react";
import LoginComponent from "../components/login/login";
import TopNav from "../components/top-nav";
import Footer from "../components/footer";

const Login = () => {
  return (
    <div>
      <TopNav />
      <LoginComponent />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
