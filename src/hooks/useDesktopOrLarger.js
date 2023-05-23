import { useEffect, useState } from "react";

export function useDesktopOrLarger() {
  const [isDesktopOrLarger, setIsDesktopOrLarger] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    setIsDesktopOrLarger(mediaQuery.matches);

    const handleResize = (event) => {
      setIsDesktopOrLarger(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isDesktopOrLarger;
}
