import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function PaymentResult() {
  const [status, setStatus] = useState("Verifying payment...");
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const reference = query.get("reference");

    if (!reference) {
      setStatus("No payment reference found. Payment may have been cancelled.");
      return;
    }

    axios
      .get(`/api/payment/verifypayment?reference=${reference}`)
      .then((res) => {
        if (res.data.status === "success") {
          setStatus("Payment successful! Thank you.");
        } else {
          setStatus("Payment failed or cancelled.");
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus("Error verifying payment. Try again later.");
      });
  }, [location.search]);

  return <div>{status}</div>;
}

export default PaymentResult;
