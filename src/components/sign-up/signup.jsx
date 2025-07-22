import React from "react";
import style from "../../styles/signup.module.css";
import Google from "../../assets/google.png";
import Fb from "../../assets/fb.png";
import Link from "../../assets/linkdln.png";

import SignupIntro from "./signup-intro";

const SignUp = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.contentDiv}>
          <SignupIntro />

          <div className={style.signupSection}>
            <div className={style.signupText}>
              <h4>SIGN UP</h4>
              <p>Sign up to continue your 28-Day Challenge journey.</p>
            </div>

            <div className={style.inputDiv}>
              {/* top */}
              <div className={style.inputGroup}>
                <label>FIRST NAME</label>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className={style.inputGroup}>
                <label>LAST NAME</label>
                <input type="text" placeholder="Enter your Last name" />
              </div>
              {/* middle */}
              <div className={style.inputEmailDiv}>
                <label>Email</label>
                <input type="email " />
              </div>

              {/* two buttom for password  */}

              <div className={style.inputGroup}>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <div className={style.inputGroup}>
                <label>RE-ENTER PASSWORD</label>
                <input type="password" placeholder="" />
              </div>
            </div>

            <div className={style.signUpWith}>
              <div className={style.signUpWithBox1}>
                <div className={style.emptyDiv}></div>
                <div className={style.orDiv}>
                  <p>Or sign up with:</p>
                </div>
                <div className={style.emptyDiv}></div>
              </div>

              <div className={style.signUpWithBox2}>
                <div className={style.signUpWithBox2Buttton}>
                  <button className={style.signUpWithBox2ButttonFb}>
                    {" "}
                    <img src={Fb} alt="" />
                    Facebook
                  </button>
                  <button className={style.signUpWithBox2ButttonGg}>
                    <img src={Google} alt="" />
                    Google
                  </button>
                  <button className={style.signUpWithBox2Butttonld}>
                    <img src={Link} alt="" /> Linkdin
                  </button>
                </div>

                <div className={style.alreadyAccount}>
                  <p>Already have an account?</p> <a href="/">Sign in</a>
                </div>
              </div>
              <div className={style.signUpBtnDiv}>
                <button>SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
