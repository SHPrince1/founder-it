import { Link, useSearchParams } from "react-router-dom";

const PaymentFailed = () => {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get("reason");

  const message =
    reason === "timeout"
      ? "Your payment session timed out. Please try again."
      : "Please complete your payment before proceeding.";

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2 style={{ color: "red" }} aria-label="Payment Failed">
        Payment Failed ❌
      </h2>
      <p style={{ fontSize: "2rem" }}>😞</p>
      <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>{message}</p>

      <div style={{ marginTop: "2rem" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            marginRight: "1rem",
          }}
          aria-label="Go back to HomePage"
        >
          Go back to HomePage
        </Link>

        <Link
          to="/pricing"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
          }}
          aria-label="Retry Payment"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;