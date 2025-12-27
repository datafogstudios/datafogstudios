import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLearningAssessmentStore = create(
  persist(
    (set, get) => ({
      // Assessment State
      assessmentComplete: false,
      learningStyle: null, // 'visual', 'kinesthetic', 'auditory'
      learningStyleScore: {
        visual: 0,
        kinesthetic: 0,
        auditory: 0,
      },
      skillLevel: null, // 'beginner', 'intermediate', 'advanced'
      goals: [],

      // Questions answered
      currentQuestion: 0,
      answers: [],

      // Assessment Questions
      questions: [
        {
          id: 1,
          text: 'When learning something new, do you prefer to:',
          options: [
            { text: 'Watch diagrams and visual explanations', style: 'visual' },
            { text: 'Read detailed written explanations', style: 'kinesthetic' },
            { text: 'Hear explanations spoken aloud', style: 'auditory' },
          ],
        },
        {
          id: 2,
          text: 'Which environment helps you concentrate best?',
          options: [
            { text: 'Quiet with visual materials', style: 'visual' },
            { text: 'Hands-on practice environment', style: 'kinesthetic' },
            { text: 'Interactive discussion-based', style: 'auditory' },
          ],
        },
        {
          id: 3,
          text: 'When remembering information, you typically:',
          options: [
            { text: 'Picture it in your mind', style: 'visual' },
            { text: 'Try it out practically', style: 'kinesthetic' },
            { text: 'Remember what was said', style: 'auditory' },
          ],
        },
        {
          id: 4,
          text: 'How do you prefer to receive instructions?',
          options: [
            { text: 'Written step-by-step guides', style: 'visual' },
            { text: 'By doing it hands-on', style: 'kinesthetic' },
            { text: 'Verbal explanation from teacher', style: 'auditory' },
          ],
        },
        {
          id: 5,
          text: 'What is your primary coding goal?',
          options: [
            { text: 'Build web applications', style: null },
            { text: 'Data science & machine learning', style: null },
            { text: 'Mobile app development', style: null },
            { text: 'System design & algorithms', style: null },
          ],
        },
      ],

      // Actions
      answerQuestion: (questionId, selectedOption) =>
        set((state) => {
          const newAnswers = [...state.answers, { questionId, selectedOption }];
          const newScores = { ...state.learningStyleScore };

          if (selectedOption.style) {
            newScores[selectedOption.style]++;
          }

          return {
            answers: newAnswers,
            learningStyleScore: newScores,
            currentQuestion: state.currentQuestion + 1,
          };
        }),

      completeAssessment: () =>
        set((state) => {
          const { visual, kinesthetic, auditory } = state.learningStyleScore;
          let dominant = 'visual';
          if (kinesthetic >= visual && kinesthetic >= auditory) dominant = 'kinesthetic';
          else if (auditory >= visual && auditory >= kinesthetic) dominant = 'auditory';

          return {
            assessmentComplete: true,
            learningStyle: dominant,
          };
        }),

      resetAssessment: () =>
        set({
          assessmentComplete: false,
          learningStyle: null,
          learningStyleScore: {
            visual: 0,
            kinesthetic: 0,
            auditory: 0,
          },
          currentQuestion: 0,
          answers: [],
        }),

      getRecommendations: () => {
        const state = get();
        const style = state.learningStyle;

        const recommendations = {
          visual: {
            title: 'Visual Learner',
            description:
              'You learn best through visual representations like diagrams, charts, and demonstrations.',
            courseTypes: ['Video tutorials', 'Infographics', 'Live coding demos'],
            tips: [
              'Use color-coded syntax highlighting',
              'Create visual mind maps for concepts',
              'Watch screen recordings of code walkthroughs',
            ],
          },
          kinesthetic: {
            title: 'Kinesthetic Learner',
            description:
              'You learn best by doing and practicing. Hands-on experience is crucial for your learning.',
            courseTypes: ['Interactive coding challenges', 'Project-based learning', 'Code playgrounds'],
            tips: [
              'Work on projects immediately',
              'Write code alongside tutorials',
              'Build real-world applications',
            ],
          },
          auditory: {
            title: 'Auditory Learner',
            description:
              'You learn best through listening and discussion. Verbal explanations help you understand concepts.',
            courseTypes: ['Podcast-style lectures', 'Live interactive sessions', 'Audio explanations'],
            tips: [
              'Join live coding sessions',
              'Participate in study groups',
              'Listen to programming podcasts',
            ],
          },
        };

        return recommendations[style] || recommendations.visual;
      },
    }),
    {
      name: 'assessment-storage',
      version: 1,
    }
  )
);
