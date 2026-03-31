"use client";

import { useEffect, useState } from "react";

export function UrgencyBar() {
  const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#D32323] py-3 px-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-white font-bold text-sm tracking-wide">
          OFERTA ENCERRA EM
        </span>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 rounded px-3 py-1.5 min-w-[48px]">
              <span className="text-white font-bold text-xl">
                {String(time.hours).padStart(2, "0")}
              </span>
            </div>
            <span className="text-white/90 text-[10px] mt-1">horas</span>
          </div>
          <span className="text-white font-bold text-xl -mt-4">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 rounded px-3 py-1.5 min-w-[48px]">
              <span className="text-white font-bold text-xl">
                {String(time.minutes).padStart(2, "0")}
              </span>
            </div>
            <span className="text-white/90 text-[10px] mt-1">minutos</span>
          </div>
          <span className="text-white font-bold text-xl -mt-4">:</span>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 rounded px-3 py-1.5 min-w-[48px]">
              <span className="text-white font-bold text-xl">
                {String(time.seconds).padStart(2, "0")}
              </span>
            </div>
            <span className="text-white/90 text-[10px] mt-1">segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
