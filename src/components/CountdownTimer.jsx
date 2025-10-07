import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate = '2025-09-11T09:00:00', className = '' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const toTimestamp = (val) => {
      if (val instanceof Date) return val.getTime();
      if (typeof val === 'number') return val;
      return new Date(val).getTime();
    };
    const targetTs = toTimestamp(targetDate);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTs - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Add leading zeros for single digits
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-3xl mx-auto ${className}`} aria-live="polite" role="timer">
      <h3 className="text-2xl font-semibold mb-6 text-center">Summit Starts In</h3>
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="bg-white/20 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold">{formatNumber(timeLeft.days)}</div>
          <div className="text-sm md:text-base mt-1">Days</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold">{formatNumber(timeLeft.hours)}</div>
          <div className="text-sm md:text-base mt-1">Hours</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-sm md:text-base mt-1">Minutes</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl md:text-4xl font-bold">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-sm md:text-base mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
