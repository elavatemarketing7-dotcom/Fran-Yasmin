
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import Intro from './components/Intro';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INTRO);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  // Scroll to top when changing steps
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleStartQuiz = () => setCurrentStep(AppState.QUIZ);
  const handleGoToSite = () => setCurrentStep(AppState.SITE);
  
  const handleQuizComplete = (answers: string[]) => {
    setQuizAnswers(answers);
    setCurrentStep(AppState.ANALYZING);
    // Simulate analyzing time
    setTimeout(() => {
      setCurrentStep(AppState.RESULT);
    }, 2500);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Intro Selection */}
      {currentStep === AppState.INTRO && (
        <Intro onStartQuiz={handleStartQuiz} onGoToSite={handleGoToSite} />
      )}

      {/* Quiz Overlay / Flow */}
      {(currentStep === AppState.QUIZ || currentStep === AppState.ANALYZING) && (
        <Quiz 
          onComplete={handleQuizComplete} 
          isAnalyzing={currentStep === AppState.ANALYZING} 
          onSkip={handleGoToSite}
        />
      )}

      {/* Result Page */}
      {currentStep === AppState.RESULT && (
        <ResultPage 
          answers={quizAnswers} 
          onContinue={handleGoToSite} 
        />
      )}

      {/* Main Site */}
      {currentStep === AppState.SITE && (
        <LandingPage />
      )}
    </main>
  );
};

export default App;
