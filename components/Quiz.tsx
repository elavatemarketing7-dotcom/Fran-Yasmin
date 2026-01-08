
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, IMAGES, EXPERT_NAME } from '../constants';
import { ArrowRight, ChevronLeft } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: string[]) => void;
  isAnalyzing: boolean;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, isAnalyzing, onSkip }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  if (isAnalyzing) {
    return (
      <div className="fixed inset-0 z-[70] bg-white flex flex-col items-center justify-center p-10 text-center">
        <div className="w-24 h-24 rounded-full border-4 border-[#d4af37] p-1 mb-8 animate-spin">
          <img src={IMAGES.main} alt="Expert" className="w-full h-full object-cover rounded-full" />
        </div>
        <h2 className="font-serif text-2xl mb-4">Analisando seu perfil...</h2>
        <p className="text-gray-500 mb-8">Aguarde um momento enquanto preparamos sua avaliação personalizada.</p>
        
        <div className="w-full max-w-xs h-3 bg-gray-100 rounded-full overflow-hidden relative">
          <div className="h-full gold-gradient animate-loading-bar rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#1a1a1a] uppercase tracking-tighter">
            Analisando...
          </div>
        </div>
        
        <style>{`
          @keyframes loading-bar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-loading-bar {
            animation: loading-bar 2.5s linear forwards;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4">
      {/* Dynamic Background: Site's Hero blurred */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={IMAGES.main} className="w-full h-full object-cover blur-md scale-110 opacity-40" alt="" />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative z-10 w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up border border-gray-100 max-h-[90vh]">
        {/* Header with Floating Hero Photo and Name */}
        <div className="p-6 bg-gray-50/50 flex flex-col items-center text-center relative border-b border-gray-100">
          <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden mb-3 -mt-12 bg-white">
            <img src={IMAGES.main} alt={EXPERT_NAME} className="w-full h-full object-cover" />
          </div>
          <span className="font-signature text-2xl text-[#d4af37]">{EXPERT_NAME}</span>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Avaliação Exclusiva</p>
        </div>

        <div className="p-6 flex-1 flex flex-col overflow-y-auto">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6">
            <div 
              className="h-full gold-gradient transition-all duration-500 ease-out rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mb-8">
            <span className="text-[#d4af37] font-bold text-[10px] uppercase tracking-[0.2em] block mb-2">
              Passo {currentQuestion + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <h2 className="font-serif text-xl text-[#1a1a1a] leading-tight">
              {QUIZ_QUESTIONS[currentQuestion].text}
            </h2>
          </div>

          <div className="space-y-3">
            {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 text-left rounded-2xl border border-gray-100 hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all group active:scale-95 flex items-center justify-between"
              >
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1a1a1a]">{option}</span>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#d4af37]" />
              </button>
            ))}
          </div>

          <button 
            onClick={onSkip}
            className="mt-8 py-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest text-center w-full"
          >
            Pular e ver o site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
