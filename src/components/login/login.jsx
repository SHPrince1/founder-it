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
      {/* Popup message */}
      {showPopup && (
        <div className={style.popup}>{popupMessage}</div>
      )}
      {/* Add your login form and other components here */}
    </>
  );
};

export default LoginComponent;
