
export default function StatsCards({ title, value, subtitle, change="", image, className="" }) {
  // const isNegative = typeof change === "string" && change.startsWith("-");

  const isNegative = change.startsWith("-");
  return (
    <div className={`bg-white rounded-lg border items-start justify-center gap-2 flex-shrink-0 h-11 lg:h-15 px-2 py-2 md:py-5 ${className}`}>
      <div className="flex items-center justify-start mr-3 ml-3">
        <div className="h-9 w-9 flex items-center justify-center bg-light rounded-full">{image}</div>
        <h2 className="text-xs lg:text-lg not-italic leading-normal font-medium text-primary-700">{title}</h2>
      </div>
      <p className="text-base md:text-2xl font-bold text-gray-800 ml-4 not-italic leading-[140%]">{value}</p>
      <p className="text-[10px] font-medium not-italic mb-10 leading-normal inline text-gray-400">{subtitle}</p>
      <span className={`text-[8px] lg:text-xs font-normal not-italic font-[roboto] ml-2 ${isNegative ? "text-red-500" : "text-[#00AA6D]"}`}>
        {change}
      </span>
    </div>
  );
}
