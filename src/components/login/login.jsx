import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignupIntro from "../sign-up/signup-intro";
import style from "../../styles/login.module.css";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Popup states
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate(); //enable navigation

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
        "https://94.136.170.163:26918/api/auth/login",
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

      // Success popup
      showPopupMessage("Login successful!");

      // Redirect after short delay
      setTimeout(() => {
        navigate("/welcome");
      }, 1500);
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
          {/* Left side intro */}
          <SignupIntro />

          {/* Right side login form */}
          <div className={style.loginSection}>
            <div className={style.loginText}>
              <h4>WELCOME BACK</h4>
              <p>Welcome back! Sign in to continue your journey.</p>
            </div>

            <form className={style.inputDiv} onSubmit={handleLogin}>
              {/* Email */}
              <div className={style.inputEmailDiv}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className={style.inputGroup}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit */}
              <div className={style.loginBtnDiv}>
                <button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "LOGIN"}
                </button>
              </div>

              {/* Signup link */}
              <div className={style.alreadyAccount}>
                <p>Don’t have an account?</p>
                <Link to="/signup-page">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup message */}
      {showPopup && <div className={style.popup}>{popupMessage}</div>}
    </>
  );
};

export default LoginComponent;
