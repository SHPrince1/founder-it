import { Link } from "react-router-dom";

const PaymentFailed = () => (
  <div style={{ textAlign: "center", marginTop: "3rem" }}>
    <h2 style={{ color: "red" }}>Payment Failed ❌</h2>
    <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
      Please complete your payment before proceeding.
    </p>

    <Link
      to="/"
      style={{
        display: "inline-block",
        marginTop: "2rem",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#007bff",
        color: "white",
        textDecoration: "none",
        borderRadius: "8px",
      }}
    >
      Go back to Home
    </Link>
  </div>
);

export default PaymentFailed;
