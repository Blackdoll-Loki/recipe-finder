'use client'

import { useEffect, useState } from "react";

interface Meatball {
  id: number;
  left: string; // можна використати тип string для відсоткових значень (наприклад, 50vw)
  animationDuration: string; // тип string, оскільки це буде тривалість анімації у форматі "2s"
}

const MeatballRain = () => {
  const [meatballs, setMeatballs] = useState<Meatball[]>([]); // визначили тип для масиву

  useEffect(() => {
    const newMeatballs = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw", 
      animationDuration: Math.random() * 3 + 2 + "s",
    }));
    setMeatballs(newMeatballs);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {meatballs.map((meatball) => (
        <div
          key={meatball.id}
          className="absolute top-0 text-3xl"
          style={{
            left: meatball.left,
            animation: `fall ${meatball.animationDuration} linear infinite`,
          }}
        >
          🧆
        </div>
      ))}
      <style>{`
        @keyframes fall {
          from {
            transform: translateY(-100px);
            opacity: 1;
          }
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MeatballRain;
