
import React, { useState, useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

const UrgencyTimer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (timerRef.current) {
        const rect = timerRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div ref={timerRef} className="py-4 w-full">
      <div 
        className={`${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''} 
          bg-spiritual-dark text-white py-3 px-4`}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="flex items-center mb-3 md:mb-0">
              <Clock className="w-5 h-5 mr-2" />
              <p className="text-lg">Oferta especial por tempo limitado:</p>
            </div>
            <div className="flex items-center text-2xl font-bold">
              <span className="bg-white text-spiritual-dark px-2 py-1 rounded mr-1">
                {formatTime(minutes)}
              </span>
              <span>:</span>
              <span className="bg-white text-spiritual-dark px-2 py-1 rounded ml-1">
                {formatTime(seconds)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyTimer;
