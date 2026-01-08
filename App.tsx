
import React, { useState, useEffect } from 'react';
import { AppState } from './types.ts';
import LandingPage from './components/LandingPage.tsx';
import Quiz from './components/Quiz.tsx';
import ResultPage from './components/ResultPage.tsx';
import Intro from './components/Intro.tsx';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INTRO);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleStartQuiz = () => setCurrentStep(AppState.QUIZ);
  const handleGoToSite = () => setCurrentStep(AppState.SITE);
  
  const handleQuizComplete = (answers: string[]) => {
    setQuizAnswers(answers);
    setCurrentStep(AppState.ANALYZING);
    setTimeout(() => {
      setCurrentStep(AppState.RESULT);
    }, 2500);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {currentStep === AppState.INTRO && (
        <Intro onStartQuiz={handleStartQuiz} onGoToSite={handleGoToSite} />
      )}

      {(currentStep === AppState.QUIZ || currentStep === AppState.ANALYZING) && (
        <Quiz 
          onComplete={handleQuizComplete} 
          isAnalyzing={currentStep === AppState.ANALYZING} 
          onSkip={handleGoToSite}
        />
      )}

      {currentStep === AppState.RESULT && (
        <ResultPage 
          answers={quizAnswers} 
          onContinue={handleGoToSite} 
        />
      )}

      {currentStep === AppState.SITE && (
        <LandingPage />
      )}
    </main>
  );
};

export default App;
