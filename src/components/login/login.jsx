import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignupIntro from "../sign-up/signup-intro";
import style from "../../styles/login.module.css";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Popup states
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://founderfit-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.message || "Login failed");
      }

      // Save token
      localStorage.setItem("token", data.token);

      console.log("Login success:", data);

      // TODO: Navigate to dashboard or home page
      // e.g., navigate("/dashboard");
    } catch (err) {
      showPopupMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.introSection}>
          <SignupIntro />
        </div>
        <div className={style.loginSection}>
          <div className={style.textDiv}>
            <h2>Welcome Back!</h2>
            <p>Log in to continue your 28-Day Challenge journey.</p>
          </div>

        {/* Form */}
        <form className={style.inputDiv} onSubmit={handleLogin}>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className={style.inputEmailDiv}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

            <div className={style.inputEmailDiv}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={style.forgotPassword}>
              <p>Keep me signed in</p>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

          <div className={style.alreadyAccount}>
            <p>Don’t have an account?</p>
            <Link to="/sign-up">Sign up</Link>
          </div>

          <div className={style.signUpBtnDiv}>
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "SIGN IN"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
