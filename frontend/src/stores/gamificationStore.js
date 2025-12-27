import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useGamificationStore = create(
  persist(
    (set, get) => ({
      // User XP and Level
      xp: 0,
      level: 1,
      xpToNextLevel: 100,

      // Streak tracking
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: null,

      // Achievements/Badges
      achievements: [
        {
          id: 'first_course',
          name: 'First Steps',
          description: 'Complete your first course',
          icon: '🎓',
          unlocked: false,
          unlockedDate: null,
          xpReward: 50,
        },
        {
          id: 'week_warrior',
          name: 'Week Warrior',
          description: 'Maintain a 7-day streak',
          icon: '⚔️',
          unlocked: false,
          unlockedDate: null,
          xpReward: 100,
        },
        {
          id: 'code_master',
          name: 'Code Master',
          description: 'Complete 10 coding challenges',
          icon: '🧙‍♂️',
          unlocked: false,
          unlockedDate: null,
          xpReward: 200,
        },
        {
          id: 'night_owl',
          name: 'Night Owl',
          description: 'Complete a course after midnight',
          icon: '🦉',
          unlocked: false,
          unlockedDate: null,
          xpReward: 75,
        },
        {
          id: 'social_butterfly',
          name: 'Social Butterfly',
          description: 'Help 5 other learners in chat',
          icon: '🦋',
          unlocked: false,
          unlockedDate: null,
          xpReward: 150,
        },
        {
          id: 'speed_runner',
          name: 'Speed Runner',
          description: 'Complete a course in under 2 hours',
          icon: '🏃',
          unlocked: false,
          unlockedDate: null,
          xpReward: 100,
        },
      ],

      // Leaderboard
      leaderboard: [
        { rank: 1, userId: 'user_1', username: 'Alex Chen', xp: 5420, level: 12 },
        { rank: 2, userId: 'user_2', username: 'Jordan Silva', xp: 4890, level: 11 },
        { rank: 3, userId: 'user_3', username: 'Sam Wilson', xp: 4550, level: 11 },
        { rank: 4, userId: 'user_4', username: 'Casey Lee', xp: 4200, level: 10 },
        { rank: 5, userId: 'user_5', username: 'Morgan Davis', xp: 3950, level: 10 },
        { rank: 6, userId: 'user_6', username: 'Taylor Brown', xp: 3750, level: 9 },
        { rank: 7, userId: 'user_7', username: 'Riley Martinez', xp: 3420, level: 9 },
        { rank: 8, userId: 'user_8', username: 'Cameron Johnson', xp: 3100, level: 8 },
        { rank: 9, userId: 'user_9', username: 'Avery Garcia', xp: 2890, level: 8 },
        { rank: 10, userId: 'user_10', username: 'Skylar White', xp: 2650, level: 7 },
      ],

      // User rank (for context)
      userRank: 15,

      // Actions
      addXP: (amount) =>
        set((state) => {
          const newXP = state.xp + amount;
          const currentLevelXP = state.level * 100;

          // Check level up
          if (newXP >= currentLevelXP) {
            return {
              xp: newXP,
              level: state.level + 1,
              xpToNextLevel: (state.level + 1) * 100 - newXP,
            };
          }

          return {
            xp: newXP,
            xpToNextLevel: currentLevelXP - newXP,
          };
        }),

      incrementStreak: () =>
        set((state) => {
          const today = new Date().toDateString();
          const lastDate = state.lastActivityDate;

          // Check if already incremented today
          if (lastDate === today) {
            return state;
          }

          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);

          // If last activity was yesterday, increment streak
          if (lastDate === yesterday.toDateString()) {
            const newStreak = state.currentStreak + 1;
            const newLongest = Math.max(newStreak, state.longestStreak);

            // Award bonus XP for streak milestones
            if (newStreak === 7) {
              // Week Warrior milestone
              get().unlockAchievement('week_warrior');
              get().addXP(100);
            }

            return {
              currentStreak: newStreak,
              longestStreak: newLongest,
              lastActivityDate: today,
            };
          }

          // If activity was not recent, reset streak
          if (lastDate !== today) {
            return {
              currentStreak: 1,
              lastActivityDate: today,
            };
          }

          return state;
        }),

      resetStreak: () =>
        set({
          currentStreak: 0,
          lastActivityDate: null,
        }),

      unlockAchievement: (achievementId) =>
        set((state) => {
          const updatedAchievements = state.achievements.map((ach) => {
            if (ach.id === achievementId && !ach.unlocked) {
              // Award XP for unlocking achievement
              get().addXP(ach.xpReward);
              return {
                ...ach,
                unlocked: true,
                unlockedDate: new Date().toISOString(),
              };
            }
            return ach;
          });

          return {
            achievements: updatedAchievements,
          };
        }),

      getUnlockedAchievements: () => {
        const state = get();
        return state.achievements.filter((ach) => ach.unlocked);
      },

      getProgressPercentage: () => {
        const state = get();
        const currentLevelXP = state.level * 100;
        const prevLevelXP = (state.level - 1) * 100;
        const xpInCurrentLevel = state.xp - prevLevelXP;
        const xpNeededForLevel = currentLevelXP - prevLevelXP;
        return (xpInCurrentLevel / xpNeededForLevel) * 100;
      },

      // Reset all data (for testing)
      reset: () =>
        set({
          xp: 0,
          level: 1,
          xpToNextLevel: 100,
          currentStreak: 0,
          longestStreak: 0,
          lastActivityDate: null,
          achievements: get().achievements.map((ach) => ({
            ...ach,
            unlocked: false,
            unlockedDate: null,
          })),
        }),
    }),
    {
      name: 'gamification-storage', // LocalStorage key
      version: 1,
    }
  )
);
