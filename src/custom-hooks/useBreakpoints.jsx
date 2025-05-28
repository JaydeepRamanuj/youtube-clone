import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  useEffect(() => {
    setBreakpoint(window.innerWidth);
    function handleResize() {
      setBreakpoint(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
