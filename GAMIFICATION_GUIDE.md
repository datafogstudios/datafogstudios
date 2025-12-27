# Gamification & Assessment Integration Guide

## 🚀 Quick Start

### 1. View the Gamification Dashboard

```bash
# Start the frontend
cd C:\Users\Admin\DataFogStudios\frontend
npm run dev

# Open browser to:
http://localhost:5173/gamification
```

### 2. Take the Learning Assessment

```
Navigate to:
http://localhost:5173/assessment
```

---

## 📦 Using Gamification in Your Components

### Import and Use Gamification Store

```jsx
import { useGamificationStore } from '../stores/gamificationStore'

export function CourseCompletion() {
  const { addXP, unlockAchievement, incrementStreak } = useGamificationStore()

  const handleCourseComplete = () => {
    // Award XP when user completes course
    addXP(100)
    
    // Unlock achievement if first course
    unlockAchievement('first_course')
    
    // Increment daily streak
    incrementStreak()
  }

  return (
    <button onClick={handleCourseComplete}>
      Complete Course
    </button>
  )
}
```

### Display User Stats

```jsx
import { useGamificationStore } from '../stores/gamificationStore'

export function UserStats() {
  const { xp, level, currentStreak } = useGamificationStore()

  return (
    <div>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
      <p>Streak: {currentStreak}🔥</p>
    </div>
  )
}
```

---

## 📋 Available Actions

### Gamification Store Actions

```javascript
import { useGamificationStore } from '../stores/gamificationStore'

// Get store data
const {
  xp,                      // Current XP count
  level,                   // Current level (1+)
  xpToNextLevel,          // XP needed for next level
  currentStreak,          // Days in current streak
  longestStreak,          // Personal best streak
  achievements,           // Array of all achievements
  leaderboard,            // Array of top 10 users
  userRank,               // User's current rank
} = useGamificationStore()

// Modify store data
const {
  addXP,                  // addXP(amount) - add XP
  incrementStreak,        // incrementStreak() - add to streak
  resetStreak,            // resetStreak() - reset to 0
  unlockAchievement,      // unlockAchievement(id) - unlock badge
  getUnlockedAchievements, // getUnlockedAchievements() - array
  getProgressPercentage,  // getProgressPercentage() - 0-100%
  reset,                  // reset() - clear all data
} = useGamificationStore()
```

### Learning Assessment Store Actions

```javascript
import { useLearningAssessmentStore } from '../stores/learningAssessmentStore'

const {
  assessmentComplete,     // Boolean - quiz finished?
  learningStyle,          // 'visual' | 'kinesthetic' | 'auditory'
  currentQuestion,        // Current question index
  questions,              // Array of 5 assessment questions
} = useLearningAssessmentStore()

const {
  answerQuestion,         // answerQuestion(id, option)
  completeAssessment,     // completeAssessment() - finalize
  getRecommendations,     // getRecommendations() - tips & tips
  resetAssessment,        // resetAssessment() - start over
} = useLearningAssessmentStore()
```

### User Store Actions

```javascript
import { useUserStore } from '../stores/userStore'

const {
  userId,                 // User ID
  email,                  // Email address
  fullName,               // Full name
  learningStyle,          // From assessment
  coursesEnrolled,        // Count
  coursesCompleted,       // Count
} = useUserStore()

const {
  setUser,                // setUser(userData)
  setLearningStyle,       // setLearningStyle(style)
  updateProgress,         // updateProgress({enrolled, completed, hours})
  logout,                 // logout()
} = useUserStore()
```

---

## 🎯 Common Use Cases

### When User Completes a Course

```jsx
import { useGamificationStore } from '../stores/gamificationStore'
import { useUserStore } from '../stores/userStore'

function CourseCard({ courseId, courseName }) {
  const { addXP, unlockAchievement } = useGamificationStore()
  const { updateProgress, coursesCompleted } = useUserStore()

  const handleComplete = async () => {
    // Award 100 XP for course completion
    addXP(100)
    
    // Update user progress
    updateProgress({
      completed: coursesCompleted + 1,
      hours: 2.5
    })
    
    // Check if first course - unlock achievement
    if (coursesCompleted === 0) {
      unlockAchievement('first_course')
    }
    
    // Show celebration/confetti
    celebrate()
  }

  return (
    <button onClick={handleComplete}>
      Complete Course
    </button>
  )
}
```

### Daily Check-in Feature

```jsx
function DailyCheckIn() {
  const { incrementStreak, currentStreak } = useGamificationStore()

  const handleCheckIn = () => {
    incrementStreak()
    showNotification(`🔥 ${currentStreak + 1} day streak!`)
  }

  return (
    <button onClick={handleCheckIn}>
      Daily Check-in
    </button>
  )
}
```

### Course Recommendation Based on Learning Style

```jsx
import { useLearningAssessmentStore } from '../stores/learningAssessmentStore'

function CourseRecommendations() {
  const { learningStyle, getRecommendations } = useLearningAssessmentStore()
  const recommendations = getRecommendations()

  if (!learningStyle) {
    return <p>Take the assessment to get personalized recommendations</p>
  }

  return (
    <div>
      <h2>{recommendations.title}</h2>
      <p>{recommendations.description}</p>
      <div>
        <h3>Recommended for you:</h3>
        {recommendations.courseTypes.map(type => (
          <Chip key={type}>{type}</Chip>
        ))}
      </div>
      <div>
        <h3>Learning Tips:</h3>
        {recommendations.tips.map(tip => (
          <p key={tip}>✓ {tip}</p>
        ))}
      </div>
    </div>
  )
}
```

### Show XP Progress

```jsx
import { useGamificationStore } from '../stores/gamificationStore'

function XPBar() {
  const { xp, level, getProgressPercentage } = useGamificationStore()
  const progress = getProgressPercentage()

  return (
    <div>
      <p>Level {level} - {progress.toFixed(0)}% to next level</p>
      <div style={{ width: '100%', height: '10px', background: '#ddd' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: '#3b82f6' }} />
      </div>
      <p>{xp} XP</p>
    </div>
  )
}
```

---

## 🔗 Routes to Access

| Route | Component | Purpose |
|-------|-----------|---------|
| `/gamification` | GamificationPage | Full dashboard with all stats |
| `/assessment` | AssessmentPage | 5-question learning style quiz |

---

## 💾 LocalStorage Keys

Data is automatically persisted to browser storage:

```javascript
// Gamification data
localStorage['gamification-storage']

// Assessment data
localStorage['assessment-storage']

// User data
localStorage['user-storage']
```

To clear all data:
```javascript
localStorage.removeItem('gamification-storage')
localStorage.removeItem('assessment-storage')
localStorage.removeItem('user-storage')
```

---

## 🎨 Component Styling

All components use Tailwind CSS with custom animations. Key classes:

```css
/* Gradients */
from-blue-600 to-cyan-500
from-orange-500 to-red-500
from-purple-500 to-pink-500

/* Responsive Grid */
grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6

/* Effects */
rounded-lg shadow-lg hover:shadow-xl
opacity-90 hover:opacity-100
```

---

## 🚀 Next Steps

1. **Connect to Backend**: 
   - Store user data in Supabase
   - Sync Zustand state with API

2. **Add Course Integration**:
   - Call `addXP()` on course completion
   - Unlock achievements based on actions
   - Update leaderboard with real users

3. **Customize Achievements**:
   - Add more badges (50+ different types)
   - Link to specific behaviors
   - Create seasonal/event-based badges

4. **Analytics**:
   - Track which achievements unlock first
   - Monitor engagement metrics
   - A/B test gamification features

---

## 📚 Examples

See `GamificationDashboard.jsx` for complete example implementation with demo buttons.

---

**Need help?** Check the component source code in:
- `frontend/src/stores/` - State management
- `frontend/src/components/` - UI components
- `frontend/src/pages/` - Page routes

---

*Last updated: December 27, 2025*
