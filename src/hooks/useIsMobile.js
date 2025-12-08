import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint =  640) {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(query).matches
      : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const handleChange = () => setIsMobile(media.matches);

    // Add listener
    media.addEventListener("change", handleChange);

    // Initial check
    setIsMobile(media.matches);

    // Cleanup
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return isMobile;
}
