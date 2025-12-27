import React from 'react';
import { motion } from 'framer-motion';
import { useGamificationStore } from '../stores/gamificationStore';

const XPProgress = () => {
  const { xp, level, xpToNextLevel, getProgressPercentage } = useGamificationStore();
  const progress = getProgressPercentage();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg p-6 text-white shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Level {level}</h3>
          <p className="text-sm opacity-90">{xp.toLocaleString()} XP earned</p>
        </div>
        <div className="text-5xl">⭐</div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs opacity-90 mb-1">
          <span>Progress to Level {level + 1}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            variants={progressVariants}
            initial="hidden"
            animate="visible"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs opacity-75">{xpToNextLevel} XP until next level</p>
      </div>
    </motion.div>
  );
};

export default XPProgress;
