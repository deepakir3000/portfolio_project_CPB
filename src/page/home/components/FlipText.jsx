import React, { useState, useEffect } from "react";

const FlipText = ({ texts, duration = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFlip(false);
      }, duration);
    }, duration);

    return () => clearInterval(interval);
  }, [texts.length, duration]);

  return (
    <span
      className={`inline-block relative transition-transform duration-[${duration}ms] ${
        flip ? "animate-flip" : ""
      }`}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default FlipText;
