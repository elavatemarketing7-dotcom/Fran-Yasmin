
import React from 'react';
import { IMAGES, EXPERT_NAME } from '../constants';

interface IntroProps {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.main})` }}
      />
      
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full border-4 border-[#d4af37] p-1 mb-8 shadow-2xl overflow-hidden animate-float">
          <img src={IMAGES.main} alt={EXPERT_NAME} className="w-full h-full object-cover rounded-full" />
        </div>
        
        <h1 className="font-serif text-3xl mb-4 text-[#1a1a1a]">Bem-vinda ao mundo da beleza com propósito.</h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Como deseja iniciar sua jornada de transformação com a Dra. Franciany Yasmin?
        </p>
        
        <button 
          onClick={onStartQuiz}
          className="w-full py-5 bg-[#1a1a1a] text-white rounded-2xl font-bold text-lg mb-4 shadow-xl active:scale-95 transition-all"
        >
          AVALIAÇÃO PERSONALIZADA
          <span className="block text-xs font-normal opacity-70">Recomendado para novos pacientes</span>
        </button>
        
        <button 
          onClick={onGoToSite}
          className="w-full py-4 border-2 border-[#d4af37] text-[#1a1a1a] rounded-2xl font-bold text-base active:scale-95 transition-all"
        >
          ACESSAR SITE DIRETO
        </button>

        <p className="mt-8 font-signature text-3xl text-[#d4af37]">{EXPERT_NAME}</p>
      </div>
    </div>
  );
};

export default Intro;
