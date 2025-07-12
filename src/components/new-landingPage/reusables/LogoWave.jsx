// components/LogoWave.jsx
export default function LogoWave({
  text,
  className = '',
  tStyle = '',
  svgWidthsm = '',
  svgWidth = '',
  svgHeight = '',
  
}) {
  return (
    <span className={`inline-flex flex-col items-start relative ${className}`}>
      
      {/* Label text */}
      <span className={`font-inherit text-inherit leading-inherit ${tStyle}`}>
        {text}
      </span>

      {/* SVG underline */}
      <span className="svgline">
        <svg
          className={`${svgWidth} ${svgWidthsm} ${svgHeight}`}
          viewBox="0 0 293 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5339 26.3107C3.50986 25.4321 3.48581 24.5535 4.09361 23.6442C5.57961 21.4213 14.963 17.1518 28.9551 10.8538C35.1345 8.07235 39.7238 6.98868 68.0953 5.46175C96.4668 3.93482 148.553 2.2163 188.786 5.50721C229.019 8.79811 255.82 17.1505 270.398 21.8718C284.975 26.5931 286.516 27.4302 288.895 29.1592"
            stroke="#4847EB"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}
