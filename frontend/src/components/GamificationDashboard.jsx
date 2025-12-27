import React from 'react';
import { motion } from 'framer-motion';
import StreakCounter from './StreakCounter';
import XPProgress from './XPProgress';
import AchievementBadges from './AchievementBadges';
import Leaderboard from './Leaderboard';
import { useGamificationStore } from '../stores/gamificationStore';

const GamificationDashboard = () => {
  const { addXP, incrementStreak, unlockAchievement } = useGamificationStore();

  // Demo functions to test the system
  const handleEarnXP = () => {
    const randomXP = Math.floor(Math.random() * 50) + 10;
    addXP(randomXP);
  };

  const handleDailyCheck = () => {
    incrementStreak();
  };

  const handleUnlockBadge = () => {
    const badges = ['first_course', 'week_warrior', 'code_master', 'night_owl', 'social_butterfly', 'speed_runner'];
    const randomBadge = badges[Math.floor(Math.random() * badges.length)];
    unlockAchievement(randomBadge);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Your Journey</h1>
          <p className="text-slate-300 text-lg">Track your progress, earn badges, and compete with learners worldwide</p>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          variants={sectionVariants}
        >
          <StreakCounter />
          <XPProgress />
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={sectionVariants}
          className="mb-8"
        >
          <AchievementBadges />
        </motion.div>

        {/* Leaderboard Section */}
        <motion.div
          variants={sectionVariants}
          className="mb-8"
        >
          <Leaderboard />
        </motion.div>

        {/* Demo Controls (Remove in production) */}
        <motion.div
          variants={sectionVariants}
          className="bg-slate-800 rounded-lg p-6 border border-slate-700"
        >
          <h3 className="text-white font-bold mb-4">Demo Controls (Remove in Production)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={handleEarnXP}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              🎯 Earn Random XP
            </button>
            <button
              onClick={handleDailyCheck}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              🔥 Daily Check-in
            </button>
            <button
              onClick={handleUnlockBadge}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              🏆 Unlock Random Badge
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GamificationDashboard;
