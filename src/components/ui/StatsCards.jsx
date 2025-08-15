
export default function StatsCards({ title, value, subtitle, change, image }) {
  const isNegative = change.startsWith("-");
  return (
    <div className="bg-white shadow rounded-lg border items-start justify-center gap-2 flex-shrink-0 h-[124px] px-[10px] py-[20px]">
      <div className="flex items-center justify-start space-x-3">
        <div className="h-9 w-9 flex items-center justify-center bg-[#F1FCF2] rounded-full">{image}</div>
        <h2 className="text-[18px] not-italic leading-normal font-medium text-[#1A7B2C]">{title}</h2>
      </div>
      <p className="text-2xl font-bold text-[#333] not-italic leading-[140%]">{value}</p>
      <p className="text-[10px] font-medium not-italic leading-normal inline text-[#6B7280]">{subtitle}</p>
      <span className={`text-xs font-normal not-italic font-[roboto] ml-2 ${isNegative ? "text-red-500" : "text-[#00AA6D]"}`}>
        {change}
      </span>
    </div>
  );
}
