import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstancePrivate } from "../store/auth/general/api"

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
    const verifyingPayment = async () => {
      
      try {
        const res = await axiosInstancePrivate.get(`v1/payment/verifypayment?reference=${reference}`);
        if (res.data.status === "success") {
          setStatus("Payment successful! Thank you.");
          toast.success("Payment successful! Thank you.");
        } else {
          setStatus("Payment failed or cancelled.");
          toast.error("Payment failed or cancelled.");
        }
      } catch (error) {
        toast.error("Error verifying payment. Try again later.");
        toast.error(error.response?.data?.message)
      }
    }
    verifyingPayment()

  }, [location.search]);

  return null; // UI implementation can be added here based on 'status'
}

export default PaymentResult;
