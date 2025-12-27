import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGamificationStore } from '../stores/gamificationStore';

const Leaderboard = () => {
  const { leaderboard, userRank, level, xp } = useGamificationStore();
  const [timeframe, setTimeframe] = useState('allTime');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const getRankColor = (rank) => {
    if (rank === 1) return 'from-yellow-400 to-yellow-600';
    if (rank === 2) return 'from-gray-300 to-gray-400';
    if (rank === 3) return 'from-orange-300 to-orange-500';
    return 'from-blue-100 to-blue-200';
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className="space-y-4">
      {/* Header with Filters */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 text-white shadow-lg"
      >
        <div>
          <h3 className="text-lg font-bold">Global Leaderboard</h3>
          <p className="text-sm opacity-90">Your Rank: #{userRank}</p>
        </div>
        <div className="flex gap-2">
          {['allTime', 'monthly', 'weekly'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-4 py-1 rounded-full text-sm font-semibold transition-all ${
                timeframe === tf
                  ? 'bg-white text-purple-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tf === 'allTime' ? 'All Time' : tf === 'monthly' ? 'Monthly' : 'Weekly'}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Leaderboard Table */}
      <motion.div
        className="space-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {leaderboard.map((entry) => (
          <motion.div
            key={entry.rank}
            variants={rowVariants}
            className={`bg-gradient-to-r ${getRankColor(entry.rank)} rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-2xl font-bold min-w-12">{getRankIcon(entry.rank)}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 truncate">{entry.username}</p>
                  <p className="text-sm text-gray-700">Level {entry.level}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-gray-900">{entry.xp.toLocaleString()}</p>
                <p className="text-xs text-gray-700">XP</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Your Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg p-4 text-white shadow-lg"
      >
        <p className="text-sm opacity-90 mb-2">Your Position</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">#{userRank}</p>
            <p className="text-sm opacity-75">Out of 1,234 learners</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{xp.toLocaleString()} XP</p>
            <p className="text-sm opacity-75">Level {level}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Leaderboard;
