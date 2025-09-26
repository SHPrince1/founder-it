import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ActivityIndexPage from "../pages/activityindex";
// import style from "../styles/welcome.module.css" 

const WelcomePageCom = () => {


    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("Verifying your payment...");

    useEffect(() => {
        const sessionId = searchParams.get("session_id");

        if (!sessionId) {
            setMessage("No payment session found ");
            setLoading(false);
            return;
        }

        const verifyPayment = async () => {
            let attempts = 0;
            let token = null;

            while (attempts < 5 && !token) {
                try {
                    const res = await fetch(
                        `${process.env.REACT_APP_BACKEND || "https://backend.thefounderfit.com:26918"}/api/payment/get-token/${sessionId}`
                    );
                    const data = await res.json();

                    if (res.ok && data.token) {
                        token = data.token;
                        localStorage.setItem("token", token);
                        setMessage(" Payment verified. Redirecting...");
                        setTimeout(() => navigate("/welcome"), 1500);
                        return;
                    }
                } catch (err) {
                    console.error(`Attempt ${attempts + 1} failed:`, err);
                }

                attempts++;
                await new Promise((r) => setTimeout(r, 1000)); // wait 1 second
            }

            setMessage("Payment not verified. Please complete your payment.");
            setTimeout(() => navigate("/payment-failed"), 2500);
        };

        verifyPayment();
    }, [searchParams, navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            
         
            <ActivityIndexPage />
        
            <p>{loading ? "Please wait..." : message}</p>

            
        </div>
    );
};



export default WelcomePageCom;



