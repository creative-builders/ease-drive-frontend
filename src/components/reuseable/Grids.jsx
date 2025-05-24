import React from "react";
import FeaturesGrid from "./FeaturesGrid";
import { FaMoneyBillWave, FaClock, FaShieldAlt, FaCogs } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaMoneyBillWave />,
    title: "Student-Friendly",
    subtitle: "Pricing",
  },
  {
    icon: <FaClock />,
    title: "Fast and",
    subtitle: "Reliable",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe and",
    subtitle: "Trusted Drivers",
  },
  {
    icon: <FaCogs />,
    title: "Customized",
    subtitle: "Booking Options",
  },
];

const Grids = () => {
  return (
    <div className="bg-gray-200">
      <FeaturesGrid features={featuresData} />
    </div>
  );
};

export default Grids;




