"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-08-23T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-6 md:gap-8 text-center">

      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">

          {/* Number */}
          <p className="font-cormorant text-2xl md:text-3xl text-primary">
            {value}
          </p>

          {/* Label */}
          <p className="text-xs uppercase tracking-[0.2em] text-muted mt-1">
            {label}
          </p>

        </div>
      ))}

    </div>
  );
}