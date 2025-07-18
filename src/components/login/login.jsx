import React from "react";
import SignupIntro from "../sign-up/signup-intro";
import style from "../../styles/login.module.css";

const LoginComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.introSection}>
        <SignupIntro />
      </div>
      <div className={style.loginSection}>
        <div>
          <h2>Welcome Back!</h2>
          <p>Log in to continue your 28-Day Challenge journey.</p>
        </div>

        <div className={style.inputDiv}>
          
        
          
          <div className={style.inputEmailDiv}>
            <label>Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className={style.inputEmailDiv}>
            <label>PASSWORD</label>
            <input type="password"  placeholder="Enter password"/>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
