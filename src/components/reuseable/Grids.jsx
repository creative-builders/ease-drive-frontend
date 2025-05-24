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



// import React from "react";
// import FeaturesGrid from "./components/FeaturesGrid";

// // SVG imports (adjust path if needed)
// import { ReactComponent as PricingIcon } from "./assets/icons/pricing.svg";
// import { ReactComponent as ClockIcon } from "./assets/icons/clock.svg";
// import { ReactComponent as ShieldIcon } from "./assets/icons/shield.svg";
// import { ReactComponent as CustomIcon } from "./assets/icons/custom.svg";

// const featuresData = [
//   {
//     icon: <PricingIcon className="w-full h-full text-green-600" />,
//     title: "Student-Friendly",
//     subtitle: "Pricing",
//   },
//   {
//     icon: <ClockIcon className="w-full h-full text-green-600" />,
//     title: "Fast and",
//     subtitle: "Reliable",
//   },
//   {
//     icon: <ShieldIcon className="w-full h-full text-green-600" />,
//     title: "Safe and",
//     subtitle: "Trusted Drivers",
//   },
//   {
//     icon: <CustomIcon className="w-full h-full text-green-600" />,
//     title: "Customized",
//     subtitle: "Booking Options",
//   },
// ];

// const App = () => {
//   return <FeaturesGrid features={featuresData} />;
// };

// export default App;
