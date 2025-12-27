import React from 'react';
import { motion } from 'framer-motion';
import { useGamificationStore } from '../stores/gamificationStore';

const StreakCounter = () => {
  const { currentStreak, longestStreak } = useGamificationStore();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-2 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Current Streak */}
      <motion.div
        className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-6 text-white shadow-lg"
        variants={pulseVariants}
        animate="pulse"
      >
        <div className="text-sm font-semibold opacity-90 mb-2">Current Streak</div>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">{currentStreak}</div>
          <span className="text-5xl">🔥</span>
        </div>
        <div className="text-xs opacity-75 mt-2">days in a row</div>
      </motion.div>

      {/* Longest Streak */}
      <motion.div
        className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="text-sm font-semibold opacity-90 mb-2">Personal Best</div>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">{longestStreak}</div>
          <span className="text-5xl">👑</span>
        </div>
        <div className="text-xs opacity-75 mt-2">longest streak</div>
      </motion.div>
    </motion.div>
  );
};

export default StreakCounter;
