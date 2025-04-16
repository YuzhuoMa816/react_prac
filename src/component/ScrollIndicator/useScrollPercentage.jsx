import { useEffect, useState } from "react";

export default function useScrollPercentage() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    function handleScrollPercentage() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(Math.min(Math.max(scrolled, 0), 100));
    }

    window.addEventListener("scroll", handleScrollPercentage);
    // handleScrollPercentage();

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return scrollPercentage;
}
