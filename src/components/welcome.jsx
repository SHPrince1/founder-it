import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Welcome = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Verifying your payment...");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      setMessage("No payment session found ❌");
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND ||"https://founderfit-backend.onrender.com"}/api/payment/get-token/${sessionId}`
        );
        const data = await res.json();

        if (res.ok && data.token) {
          localStorage.setItem("token", data.token); // ✅ Save token
          setMessage("Payment verified ✅ Redirecting...");
          setTimeout(() => navigate("/dashboard"), 1500);
        } else {
          setMessage("❌ Payment not verified. Please complete your payment.");
          setTimeout(() => navigate("/payment-failed"), 2500);
        }
      } catch (err) {
        console.error(err);
        setMessage("⚠️ Server error. Try again later.");
        setTimeout(() => navigate("/payment-failed"), 2500);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Welcome to the 28-Day Challenge 🎉</h2>
      <p>{loading ? "Please wait..." : message}</p>
    </div>
  );
};

export default Welcome;
