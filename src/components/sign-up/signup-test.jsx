import React, { useState } from "react";
import style from "../../styles/signup.module.css";
import Google from "../../assets/google.png";
import Fb from "../../assets/fb.png";
import Link from "../../assets/linkdln.png";
import SignupIntro from "./signup-intro";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      showPopupMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      showPopupMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${
          process.env.REACT_APP_BACKEND_URL ||
          "https://backend.thefounderfit.com:26918"
        }/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.message || "Signup failed");
      }

      showPopupMessage(
        data.message ||
          "Account created successfully! Redirecting to payment..."
      );

      // ✅ FIX 1: Remove timeout to avoid navigation race condition
      window.location.assign(
        `https://buy.stripe.com/fZufZg4J2dGe0VT1DC5kk03?prefilled_email=${encodeURIComponent(
          email
        )}`
      );
    } catch (err) {
      showPopupMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

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
              <div className={style.inputGroup}>
                <label>FIRST NAME</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className={style.inputGroup}>
                <label>LAST NAME</label>
                <input
                  type="text"
                  placeholder="Enter your Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className={style.inputEmailDiv}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={style.inputGroup}>
                <label>PASSWORD</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className={style.inputGroup}>
                <label>RE-ENTER PASSWORD</label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
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
                  {/* ✅ FIX 2: prevent accidental navigation */}
                  <button type="button" className={style.signUpWithBox2ButttonFb}>
                    <img src={Fb} alt="Facebook" />
                    Facebook
                  </button>

                  <button
                    type="button"
                    className={style.signUpWithBox2ButttonGg}
                  >
                    <img src={Google} alt="Google" />
                    Google
                  </button>

                  <button
                    type="button"
                    className={style.signUpWithBox2Butttonld}
                  >
                    <img src={Link} alt="LinkedIn" /> LinkedIn
                  </button>
                </div>

                <div className={style.alreadyAccount}>
                  <p>Already have an account?</p> <a href="/login">Sign in</a>
                </div>
              </div>

              <div className={style.signUpBtnDiv}>
                {/* ✅ FIX 3: type="button" prevents form submission */}
                <button
                  type="button"
                  onClick={handleSignup}
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "SIGN UP - ONLY $5.99"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          {popupMessage}
        </div>
      )}
    </>
  );
};

export default SignUp;
