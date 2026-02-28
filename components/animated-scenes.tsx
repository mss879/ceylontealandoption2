'use client';

import { motion } from 'framer-motion';
import { Leaf, Mountain, Sun, Globe, Plane, Hand, Sprout, Award, Sparkles } from 'lucide-react';

export const CeylonOriginScene = () => (
  <div className="relative flex items-center justify-center w-24 h-24">
    {/* Sun rotating slowly */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 right-1"
    >
      <Sun className="w-10 h-10 text-[#d9b482]/40" fill="currentColor" />
    </motion.div>

    {/* Still Mountain */}
    <div className="absolute bottom-2 z-10">
      <Mountain className="w-14 h-14 text-[#b58b54]" strokeWidth={1.5} />
    </div>

    {/* Floating Leaf */}
    <motion.div
      animate={{
        y: [0, -6, 0],
        rotate: [-8, 8, -8]
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1 top-3 z-20"
    >
      <Leaf className="w-7 h-7 text-emerald-700" fill="currentColor" fillOpacity={0.9} />
    </motion.div>
  </div>
);

export const QualityProcessScene = () => (
  <div className="relative flex items-center justify-center w-24 h-24">
    {/* Award Icon pulsing slightly */}
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10"
    >
      <Award className="w-14 h-14 text-[#b58b54]" strokeWidth={1.2} />
    </motion.div>

    {/* Sparkles fading in and out */}
    <motion.div
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.1, 0.8],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1 right-1 z-20"
    >
      <Sparkles className="w-6 h-6 text-[#d9b482]" />
    </motion.div>
  </div>
);

export const GlobalLogisticsScene = () => (
  <div className="relative flex items-center justify-center w-24 h-24">
    {/* Globe in background */}
    <Globe className="absolute w-14 h-14 text-[#b58b54]/30" strokeWidth={1} />

    {/* Dotted path arc */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      <motion.path
        d="M 20 60 Q 50 20 80 50"
        fill="transparent"
        stroke="#b58b54"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
      />
    </svg>

    {/* Plane moving along the path */}
    <motion.div
      initial={{ x: -30, y: 10, rotate: 45, opacity: 0 }}
      animate={{
        x: [-30, 0, 30],
        y: [10, -15, 0],
        rotate: [45, 60, 45],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
      className="absolute self-center z-10"
    >
      <Plane className="w-5 h-5 text-emerald-700" fill="currentColor" />
    </motion.div>

    {/* Destination Pin/Dot */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1, times: [0, 0.8, 1] }}
      className="absolute right-3 bottom-5 w-2 h-2 rounded-full bg-emerald-700"
    />
  </div>
);

export const HeritageScene = () => (
  <div className="relative flex items-center justify-center w-24 h-24">
    {/* Hand moving gently */}
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-2 z-10"
    >
      <Hand className="w-12 h-12 text-[#b58b54]" strokeWidth={1.5} />
    </motion.div>

    {/* Sprout growing slowly */}
    <motion.div
      animate={{
        scale: [0.95, 1.05, 0.95],
        y: [0, -2, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute bottom-9 z-0"
    >
      <Sprout className="w-10 h-10 text-emerald-700" fill="currentColor" fillOpacity={0.9} />
    </motion.div>
  </div>
);
