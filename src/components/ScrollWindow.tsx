import { useEffect } from "react";

const ScrollWindow = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return children;
};

export default ScrollWindow;
