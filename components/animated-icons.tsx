'use client';

import { motion } from 'framer-motion';
import { Leaf, Award, Globe, Heart } from 'lucide-react';

export const AnimatedLeaf = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ 
      rotate: [0, 10, -10, 0],
      y: [0, -3, 0]
    }}
    transition={{ 
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Leaf className={className} />
  </motion.div>
);

export const AnimatedAward = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ 
      scale: [1, 1.1, 1],
      rotateY: [0, 180, 360]
    }}
    transition={{ 
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }}
  >
    <Award className={className} />
  </motion.div>
);

export const AnimatedGlobe = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ 
      duration: 15, 
      repeat: Infinity, 
      ease: "linear" 
    }}
  >
    <Globe className={className} />
  </motion.div>
);

export const AnimatedHeart = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ 
      duration: 1.2, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    <Heart className={className} />
  </motion.div>
);
