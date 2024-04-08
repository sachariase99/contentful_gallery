import { useState, useEffect } from "react";

const Loader = ({ loadingTime = 1500, intervalTime = 10 }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => prevProgress < 100 ? prevProgress + 1 : 100);
    }, intervalTime);

    const loadingTimer = setTimeout(() => {
      setLoadingProgress(100);
    }, loadingTime);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(timer);
    };
  }, [loadingTime, intervalTime]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <svg width="120" height="120">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#f3f3f3" strokeWidth="10" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="#3498db" strokeWidth="10" strokeDasharray="314.16" strokeDashoffset={`${314.16 * (1 - loadingProgress / 100)}`} />
        <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" strokeWidth="2px" dy=".3em">{`${loadingProgress}%`}</text>
      </svg>
    </div>
  );
};

export default Loader;