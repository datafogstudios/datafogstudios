import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGamificationStore } from '../stores/gamificationStore';

const AchievementBadges = () => {
  const { achievements, getUnlockedAchievements } = useGamificationStore();
  const [selectedBadge, setSelectedBadge] = useState(null);
  const unlockedCount = getUnlockedAchievements().length;

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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring' },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const badgeContent = (badge) => (
    <motion.div
      key={badge.id}
      className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all cursor-pointer ${
        badge.unlocked
          ? 'bg-gradient-to-br from-yellow-100 to-orange-100 shadow-md'
          : 'bg-gray-200 opacity-50'
      }`}
      variants={badgeVariants}
      whileHover={badge.unlocked ? 'hover' : {}}
      whileTap={badge.unlocked ? 'tap' : {}}
      onClick={() => badge.unlocked && setSelectedBadge(badge)}
    >
      <span className={`text-4xl mb-2 ${!badge.unlocked && 'grayscale'}`}>{badge.icon}</span>
      <p className="text-xs font-semibold text-center line-clamp-2">{badge.name}</p>
      {badge.unlocked && (
        <p className="text-xs text-orange-600 font-bold mt-1">+{badge.xpReward} XP</p>
      )}
    </motion.div>
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-4 text-white shadow-lg"
      >
        <h3 className="text-lg font-bold">Achievements</h3>
        <p className="text-sm opacity-90">
          {unlockedCount} of {achievements.length} unlocked
        </p>
      </motion.div>

      {/* Badge Grid */}
      <motion.div
        className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {achievements.map(badgeContent)}
      </motion.div>

      {/* Badge Detail Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBadge(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg p-8 max-w-sm text-center shadow-xl"
            >
              <span className="text-6xl mb-4 block">{selectedBadge.icon}</span>
              <h4 className="text-2xl font-bold mb-2">{selectedBadge.name}</h4>
              <p className="text-gray-600 mb-4">{selectedBadge.description}</p>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-3 mb-4">
                <p className="font-bold text-orange-700">+{selectedBadge.xpReward} XP Reward</p>
              </div>
              {selectedBadge.unlockedDate && (
                <p className="text-sm text-gray-500">
                  Unlocked: {new Date(selectedBadge.unlockedDate).toLocaleDateString()}
                </p>
              )}
              <button
                onClick={() => setSelectedBadge(null)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementBadges;
