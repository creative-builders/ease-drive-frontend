import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function CustomButton({
  children,
  width,
  height,
  paddingX,
  borderRadius,
  borderWidth,
  borderColor,
  backgroundColor,
  className = "",
  urlLink
}) {

  const navigate = useNavigate()


    const reDirector = (urlLink) => {
    navigate(urlLink);
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 ${className} hover:opacity-80 hover:scale-[1.03] transition-transform`}
      onClick={() => reDirector(urlLink)}
      style={{
        width,
        height,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        borderRadius,
        borderWidth,
        borderColor,
        backgroundColor,
        borderStyle: 'solid',

      }}
    >
      {children}
    </button>
  );
}
