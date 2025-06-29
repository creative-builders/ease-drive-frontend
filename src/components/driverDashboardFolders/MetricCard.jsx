
const MetricCard = ({
  title,
  value,
  changePercentage,
  changeType,
  icon,
  arrow,
  className = '',
}) => {
  const isIncrease = changeType === 'increase';
  const changeColorClass = isIncrease ? 'text-green-600' : 'text-red-600';


  return (
    <div
      className={`bg-blue-50 p-6 rounded-2xl shadow-md flex justify-between items-center w-full max-w-sm mx-auto font-inter ${className}`}
      // style={{ minWidth: '320px' }}
    >
      {/* Left section */}
      <div className="flex flex-col pr-4">
        <h3 className="text-gray-600 text-sm font-medium uppercase tracking-wider mb-1">
          {title}
        </h3>
        <p className="text-gray-900 text-4xl font-bold mb-2 leading-none">
          {value}
        </p>
        <div className={`flex flex-row-reverse items-center text-lg font-semibold ${changeColorClass}`}>
          <span className="ml-1">{changePercentage}% {isIncrease ? 'Increase' : 'Decrease'}</span>
          <img src={arrow} alt={title + " icon "} className="" />
        </div>
      </div>

      {/* Right section: Icon */}
      <div className="flex-shrink-0">
        <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center shadow-inner">
          <img src={icon} alt={title + " icon"} className="w-8 h-8 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
