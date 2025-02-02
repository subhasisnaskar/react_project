import React, { useEffect, useState } from 'react'

const Counter = ({ maxCount = 100, intervalTime = 100 }) => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;  // Declare timer variable

    const startTimer = () => {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < maxCount) {
            return prevCount + 1;
          } else {
            clearInterval(timer);  // Stop interval when maxCount is reached
            return prevCount;
          }
        });
      }, intervalTime);  // Use dynamic intervalTime
    };

    startTimer();  // Start timer

    // Clear interval when unmounting or if dependencies change
    return () => {
      clearInterval(timer);
    };
  }, [maxCount, intervalTime]);  // Re-run effect when maxCount or intervalTime changes

  
    return (
        <div>
            {count} 
        </div>
    )
}

export default Counter
