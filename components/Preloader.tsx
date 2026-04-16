"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textToType = "Brewing pure highland Ceylon tea...";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Body scroll lock
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  // Typing effect and Preloading logic
  useEffect(() => {
    // 1. Typing effect (aiming to finish exactly within ~2.3 seconds)
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setDisplayedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60);

    // 2. Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);

    // 3. Image Preloading & EXACT 2.5s display logic
    let imgLoaded = false;
    let timeElapsed = false;
    
    // We enforce exactly 2.5 seconds before allowing it to hide
    const minTime = setTimeout(() => {
      timeElapsed = true;
      if (imgLoaded) setLoading(false);
    }, 2500);

    const img = new window.Image();
    img.src = '/heroimg.png';
    img.onload = () => {
      imgLoaded = true;
      if (timeElapsed) setLoading(false);
    };
    img.onerror = () => {
      imgLoaded = true;
      if (timeElapsed) setLoading(false);
    };

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearTimeout(minTime);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
        >
          {/* High-end Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#d9b482]/10 blur-[130px] rounded-full pointer-events-none" />

          {/* Steam and Cup CSS */}
          <style dangerouslySetInnerHTML={{__html: `
            .steam-group path {
              opacity: 0;
              stroke-dasharray: 100;
              stroke-dashoffset: 100;
              animation: waftSteam 2s ease-in-out infinite;
            }
            .steam-1 { animation-delay: 0s !important; }
            .steam-2 { animation-delay: 0.5s !important; }
            .steam-3 { animation-delay: 1s !important; }
            
            @keyframes waftSteam {
              0% { 
                opacity: 0; 
                stroke-dashoffset: 100; 
                transform: translateY(10px) scaleX(0.9);
              }
              30% { 
                opacity: 0.6; 
              }
              80% {
                opacity: 0.3;
              }
              100% { 
                opacity: 0; 
                stroke-dashoffset: -100; 
                transform: translateY(-50px) scaleX(1.3);
              }
            }
          `}} />

          {/* Premium Still Cup with Realistic Steam */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8 z-10 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full h-full pb-8 overflow-visible">
              <defs>
                {/* 3D Liquid Surface Gradient */}
                <radialGradient id="teaSurface" cx="50%" cy="50%" r="50%">
                  <stop offset="60%" stopColor="#e3c396" />
                  <stop offset="85%" stopColor="#ab7b35" />
                  <stop offset="100%" stopColor="#3d2608" />
                </radialGradient>
                
                {/* Luxury Porcelain Cup Body Gradient */}
                <linearGradient id="cupBody" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#121212" />
                  <stop offset="25%" stopColor="#2b2b2b" />
                  <stop offset="75%" stopColor="#2b2b2b" />
                  <stop offset="100%" stopColor="#080808" />
                </linearGradient>

                {/* Soft Realistic Steam Blur */}
                <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                </filter>
              </defs>

              {/* Realistic Steam Layer (Behind front rim, above liquid) */}
              <g filter="url(#softBlur)" stroke="#ffffff" fill="none" strokeWidth="8" strokeLinecap="round" className="steam-group">
                <path d="M 80,75 C 60,30 110,10 80,-30" className="steam-1" />
                <path d="M 100,75 C 130,40 70,10 100,-40" className="steam-2" />
                <path d="M 120,75 C 100,20 150,0 120,-35" className="steam-3" />
              </g>

              {/* Saucer Base */}
              <ellipse cx="100" cy="158" rx="65" ry="12" fill="#0d0c0b" />
              <ellipse cx="100" cy="157" rx="40" ry="7" fill="#050505" />

              {/* Sleek, Delicate Cup Handle */}
              <path d="M 145,95 C 185,85 180,140 128,135" fill="none" stroke="#1f1e1d" strokeWidth="6" strokeLinecap="round" />
              <path d="M 145,95 C 185,85 180,140 128,135" fill="none" stroke="#2b2a29" strokeWidth="2" strokeLinecap="round" />

              {/* Cup Pedestal (The small ring base at the bottom of fine china) */}
              <path d="M 70,145 L 68,154 C 85,158 115,158 132,154 L 130,145 Z" fill="#111" />

              {/* Main Cup Body (Elegant classical bezier curves) */}
              <path d="M 50,85 C 50,115 60,140 70,145 C 85,152 115,152 130,145 C 140,140 150,115 150,85 Z" fill="url(#cupBody)" />
              
              {/* Cup Inner Lip (Dark inner wall) */}
              <ellipse cx="100" cy="85" rx="50" ry="16" fill="#050505" stroke="#1f1e1d" strokeWidth="1.5" />

              {/* Tea Liquid surface */}
              <ellipse cx="100" cy="87" rx="43" ry="12" fill="url(#teaSurface)" />
              
              {/* Subtle reflective glare on tea surface */}
              <ellipse cx="80" cy="85" rx="8" ry="3" fill="#ffffff" opacity="0.1" transform="rotate(-15 80 85)" />

              {/* Foreground edge highlight on cup rim to establish thickness/3D */}
              <ellipse cx="100" cy="85" rx="50" ry="16" fill="none" stroke="#4a4744" strokeWidth="1" />
            </svg>
          </div>

          {/* Typing Text & Timeline Sync */}
          <div className="flex flex-col items-center gap-6 w-full max-w-md px-6 z-10">
             <div className="flex items-center justify-center h-6">
               <span className="text-[#d9b482] text-sm md:text-base font-light uppercase tracking-[0.25em] text-center inline-block">
                 {displayedText}
                 <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-1 font-normal`}>|</span>
               </span>
             </div>
             
             {/* Progress bar perfectly synced to exactly 2.5s */}
             <div className="w-48 h-[1px] bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-gradient-to-r from-transparent via-[#d9b482] to-transparent origin-left"
                   initial={{ width: "0%", opacity: 0 }}
                   animate={{ width: "100%", opacity: 1 }}
                   transition={{ duration: 2.5, ease: "easeInOut" }}
                />
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
