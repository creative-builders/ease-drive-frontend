import React from "react";

const FeaturesGrid = ({ features }) => {
  return (
    <section className="w-full py-10 bg-gray-500">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="flex items-center justify-center w-16 h-16 text-green-600 text-xl sm:text-4xl">{feature.icon}</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-gray-800">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
