import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: any;

    if (isActive) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div className="counter">
      <h1>Contador: {count}</h1>
      <button
        onClick={() => setIsActive(false)}
        disabled={!isActive}
        style={{
          cursor: isActive ? "pointer" : "not-allowed",
        }}
      >
        Parar
      </button>
    </div>
  );
}
