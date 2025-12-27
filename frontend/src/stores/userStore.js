import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set, get) => ({
      // User Profile
      userId: null,
      email: null,
      fullName: null,
      avatar: null,
      joinDate: null,

      // Learning Preferences
      learningStyle: null, // 'visual', 'kinesthetic', 'auditory'
      preferredLanguages: [],
      timezone: 'UTC',
      notificationsEnabled: true,

      // User Progress
      coursesEnrolled: 0,
      coursesCompleted: 0,
      totalHoursLearned: 0,
      lastActivityDate: null,

      // User Actions
      setUser: (userData) =>
        set({
          userId: userData.id,
          email: userData.email,
          fullName: userData.fullName,
          avatar: userData.avatar,
          joinDate: userData.joinDate,
        }),

      setLearningStyle: (style) =>
        set({
          learningStyle: style,
        }),

      setPreferredLanguages: (languages) =>
        set({
          preferredLanguages: languages,
        }),

      updateProgress: (updates) =>
        set((state) => ({
          coursesEnrolled: updates.enrolled || state.coursesEnrolled,
          coursesCompleted: updates.completed || state.coursesCompleted,
          totalHoursLearned: updates.hours || state.totalHoursLearned,
          lastActivityDate: new Date().toISOString(),
        })),

      logout: () =>
        set({
          userId: null,
          email: null,
          fullName: null,
          avatar: null,
        }),

      reset: () =>
        set({
          userId: null,
          email: null,
          fullName: null,
          avatar: null,
          joinDate: null,
          learningStyle: null,
          preferredLanguages: [],
          coursesEnrolled: 0,
          coursesCompleted: 0,
          totalHoursLearned: 0,
          lastActivityDate: null,
        }),
    }),
    {
      name: 'user-storage',
      version: 1,
    }
  )
);
