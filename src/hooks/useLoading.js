import React, { useEffect, useState } from "react";

function useLoading(speed = 10) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading && loadingProgress < 100) {
      const timer = setTimeout(() => {
        setLoadingProgress((prev) => Math.min(prev + 1, 100)); // 10%씩 증가
      }, speed); // 0.5초마다 업데이트
      return () => clearTimeout(timer);
    } else if (loadingProgress === 100) {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [isLoading, loadingProgress]);

  return { isLoading, loadingProgress };
}

export default useLoading;
