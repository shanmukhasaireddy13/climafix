import React, { useEffect, useMemo, useState } from 'react';
import CountdownTimer from './CountdownTimer';
import arrowIcon from '../assets/arrow_icon.svg';

const Hero = () => {
  const heroImages = useMemo(() => ([
    'https://climafix.in/uploads/summit2025_grp-pic.jpg',
    'https://climafix.in/uploads/groupPhoto24.JPG',
    'https://climafix.in/uploads/climafix_2023_group.jpg'
  ]), []);
  const [heroIndex, setHeroIndex] = useState(0);
  const eventStart = new Date('2025-09-11T09:30:00');
  const eventEnd = new Date('2025-09-12T17:00:00');
  const now = new Date();
  const isLive = now >= eventStart && now <= eventEnd;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    let id;
    const start = () => { id = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000); };
    const stop = () => id && clearInterval(id);
    const onVisibility = () => { if (document.hidden) stop(); else start(); };
    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => { stop(); document.removeEventListener('visibilitychange', onVisibility); };
  }, [heroImages.length]);

  const currentHeroImage = heroImages[heroIndex];
  const pastSummits = [
    { year: 2025, label: 'Summit 2025', url: 'https://climafix.in/summit/2025/' },
    { year: 2024, label: 'Summit 2024', url: 'https://climafix.in/summit/2024/' },
    { year: 2023, label: 'Summit 2023', url: 'https://climafix.in/summit/2023/' },
    { year: 2022, label: 'Summit 2022', url: 'https://climafix.in/summit/2022/' },
  ];

  return (
    <section className="relative text-white py-24" style={{backgroundImage: `url('${currentHeroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-green-900/50" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-green-600/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <span className="text-green-100 font-medium">September 11–12, 2025 | IIT Madras Research Park, Chennai</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Climafix Summit 2025 — <span className="text-green-300">India's Climate Innovation Platform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Meet 400+ Startups, 150+ Investors, and Industry Leaders Driving Climate Action
          </p>
          {!isLive ? (
            <CountdownTimer targetDate={(() => {
              const now = new Date();
              const year = now.getFullYear();
              let month = now.getMonth();
              const day = 11; const hours = 9; const minutes = 30;
              let target = new Date(year, month, day, hours, minutes, 0);
              if (target.getTime() <= now.getTime()) target = new Date(year, month + 1, day, hours, minutes, 0);
              return target;
            })()} />
          ) : (
            <div className="inline-flex items-center justify-center bg-red-600/90 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              LIVE at IIT Madras Research Park, Chennai
            </div>
          )}
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="https://climafix.in/summit/2025/" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg transform hover:scale-105 duration-300">Register Now</a>
            <a href="https://climafix.in/summit/" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors shadow-lg">Learn More</a>
            <div className="relative inline-block">
              <button type="button" onClick={() => setDropdownOpen((v) => !v)} className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors shadow-lg flex items-center justify-center" aria-expanded={dropdownOpen} aria-controls="past-summits-dropdown">
                Past Summits
                <img src={arrowIcon} alt="toggle" className={`ml-2 h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-90' : 'rotate-0'}`} />
              </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto block">
                  <path d="M100 0 V48 Q100 56 108 56 H180" stroke="#4ade80" strokeWidth="2" fill="none" style={{ strokeDasharray: 400, strokeDashoffset: dropdownOpen ? 0 : 400, transition: 'stroke-dashoffset 700ms ease-out' }} />
                </svg>
                <div className="absolute" id="past-summits-dropdown" aria-hidden={!dropdownOpen} style={{ left: '180px', top: '63px', opacity: dropdownOpen ? 1 : 0, transform: dropdownOpen ? 'translateY(0)' : 'translateY(-8px)', transition: 'opacity 250ms ease-out 720ms, transform 250ms ease-out 720ms', pointerEvents: dropdownOpen ? 'auto' : 'none' }}>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-green-200 p-3 min-w-[260px] -translate-y-1/2">
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-green-200 rotate-45"></div>
                    <div className="flex flex-col gap-2">
                      {pastSummits.map((s) => (
                        <a key={s.year} href={s.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-gray-800 hover:text-green-700">
                          <span className="inline-block rounded-full bg-green-100 text-green-700 text-xs px-2 py-0.5">{s.year}</span>
                          <span className="font-semibold">{s.label}</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


