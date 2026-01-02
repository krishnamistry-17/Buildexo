import { useEffect, useState } from "react";

const useLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return { loading };
};

export default useLoader;
