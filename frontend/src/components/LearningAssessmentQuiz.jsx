import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLearningAssessmentStore } from '../stores/learningAssessmentStore';

const LearningAssessmentQuiz = () => {
  const {
    questions,
    currentQuestion,
    assessmentComplete,
    learningStyle,
    answerQuestion,
    completeAssessment,
    resetAssessment,
    getRecommendations,
  } = useLearningAssessmentStore();

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const recommendations = assessmentComplete ? getRecommendations() : null;

  const handleSelectOption = (option) => {
    answerQuestion(question.id, option);

    // Auto-complete when all questions answered
    if (isLastQuestion) {
      setTimeout(() => completeAssessment(), 300);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const questionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } },
  };

  const optionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.4 },
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  if (assessmentComplete && recommendations) {
    return (
      <motion.div
        className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white text-center">
            <motion.div
              className="text-5xl mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              🎯
            </motion.div>
            <h1 className="text-3xl font-bold mb-2">Assessment Complete!</h1>
            <p className="text-blue-100">Your learning style profile is ready</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Learning Style Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border-2 border-orange-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {recommendations.title}
              </h2>
              <p className="text-gray-700 mb-4">{recommendations.description}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">📚 Recommended Course Types:</h3>
                  <div className="flex flex-wrap gap-2">
                    {recommendations.courseTypes.map((type) => (
                      <motion.span
                        key={type}
                        className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        {type}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">💡 Learning Tips:</h3>
                  <ul className="space-y-2">
                    {recommendations.tips.map((tip, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <span className="text-orange-500 font-bold">→</span>
                        <span>{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={() => {
                  resetAssessment();
                  window.location.href = '/courses';
                }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all"
              >
                Explore Courses
              </button>
              <button
                onClick={resetAssessment}
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-400 transition-all"
              >
                Retake Quiz
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Learning Style Assessment</h1>
          <p className="text-blue-100">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {question && (
              <motion.div
                key={currentQuestion}
                variants={questionVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{question.text}</h2>

                <div className="space-y-3">
                  {question.options.map((option, i) => (
                    <motion.button
                      key={i}
                      custom={i}
                      variants={optionVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => handleSelectOption(option)}
                      className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 font-semibold text-gray-800"
                    >
                      ○ {option.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Info */}
          <motion.div
            className="mt-8 text-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progressPercentage)}% complete
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LearningAssessmentQuiz;
